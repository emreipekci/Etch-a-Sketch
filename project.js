//create squares
//create hovering effect

const container = document.querySelector("#container");
let previousEffect = null;

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

    square.addEventListener("mouseenter", function randomColorEffect() {

        var color1 = Math.floor(Math.random() * 255) +1;
        var color2 = Math.floor(Math.random() * 255) +1;
        var color3 = Math.floor(Math.random() * 255) +1;
        square.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
        
    });

};

const buttonTwo = document.querySelector(".random-colors");
buttonTwo.addEventListener("click", () => {
    removePreviousEffect();
    document.querySelectorAll(".square").forEach(square => {
        generateRandomSquareColors(square);
    });
    previousEffect = "random-colors"
});

//Create shading effect

function generateShadingEffect(square) {

    square.addEventListener("mouseenter", function shadingEffect() {

        let opacity = parseFloat(window.getComputedStyle(square).opacity);
        if (opacity > 0) {
          opacity -= 0.1;
        };
        square.style.opacity = opacity;    
    });

};

const buttonThree = document.querySelector(".shading");
buttonThree.addEventListener("click", () => {
    removePreviousEffect();
    document.querySelectorAll(".square").forEach(square => {
        generateShadingEffect(square);
    });
    previousEffect = "shading";
});


//Create erasing

function eraseEffects(square) {
    square.addEventListener("mouseenter", function erasingEffect() {
        square.style.backgroundColor = "";
        square.style.opacity = 1;
    })
};

const buttonFour = document.querySelector(".erase");
buttonFour.addEventListener("click", () => {
    removePreviousEffect();
    document.querySelectorAll(".square").forEach(square => {
        eraseEffects(square);
    });
    previousEffect = "erase";
});

//Clear the sketchpad

const buttonFive = document.querySelector(".clear");
buttonFive.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
        square.style.backgroundColor = "";
        square.style.opacity = 1;
    });
});

//only one effect could be active

function removePreviousEffect() {
    if (previousEffect) {
        document.querySelectorAll(".square").forEach(square => {
            const newSquare = square.cloneNode(true);
            square.parentNode.replaceChild(newSquare, square);
        });
    };
};


