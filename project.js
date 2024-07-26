//create squares
//create hovering effect

const container = document.querySelector("#container");
createGrid(10);

function createSquare(sizeSquare) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.width = `${sizeSquare}px`;
    square.style.height = `${sizeSquare}px`;

    square.addEventListener("mouseenter", () => {
        square.classList.add("hovered");
    });
    square.addEventListener("mouseleave", () => {
        square.classList.remove("hovered");
    });
    return square;
};

function createGrid(numSquaresPerSide) {
    container.innerHTML = "";

    const sizeContainer = 600;
    const sizeSquare = sizeContainer/numSquaresPerSide;

    for(let i = 1; i <= numSquaresPerSide ** 2; i++) {
        const squares = createSquare(sizeSquare); 
        container.appendChild(squares);
    }
};

const buttonOne = document.querySelector(".grid-size");
buttonOne.addEventListener("click", () => {
    const numSquaresPerSide = parseInt(prompt("Enter the number of squares per side for the new grid"));
    if (!isNaN(numSquaresPerSide) && 0 < numSquaresPerSide <= 100) {
        return createGrid(numSquaresPerSide);
    } else {
        alert("Please enter a valid number")
    }
});

//Randomize the squares' RGB values

function generateRandomSquareColors(square) {

    square.addEventListener("mouseenter", () => {

        var color1 = Math.floor(Math.random() * 255) +1;
        var color2 = Math.floor(Math.random() * 255) +1;
        var color3 = Math.floor(Math.random() * 255) +1;
        square.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
        square.classList.add("random-colors");
    });
    square.addEventListener("mouseleave", () => {
        square.classList.remove("random-colors");
    });

};

const buttonTwo = document.querySelector(".random-colors");
buttonTwo.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
        generateRandomSquareColors(square);
    });

});

//Create shading effect

function generateShadingEffect(square) {

    square.addEventListener("mouseenter", () => {

        let opacity = parseFloat(window.getComputedStyle(square.target).opacity);
        if (opacity > 0) {
          opacity -= 0.1;
        }
        square.target.style.opacity = opacity;
        square.classList.add("shading");
    });
    square.addEventListener("mouseleave", () => {
        square.classList.remove("shading");
        square.target.style.opacity = 1;
    }); 
}




/*
function generateShadingEffect(square) {
    let darkeningInterval;
    
    square.addEventListener("mouseenter", () => {

        let opacity = 0;
        square.classList.add("shading");

        if (darkeningInterval) {
            clearInterval(darkeningInterval);
        }

        darkeningInterval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                square.style.opacity = opacity.toFixed(1);
            } else {
                clearInterval(darkeningInterval);
            }
        }, 10); // Adjust the interval time as needed for smoother effect
    });

    square.addEventListener("mouseleave", () => {
        if (darkeningInterval) {
            clearInterval(darkeningInterval);
            square.classList.remove("shading");
        }
        square.style.opacity = 1; // Reset the opacity to full when the mouse leaves
    });

}
*/
const buttonThree = document.querySelector(".shading");
buttonThree.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
        generateShadingEffect(square);
    });
});

const buttonFour = document.querySelector(".erase");
buttonFour.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
    square.style.backgroundColor = "";
    });
});