//create squares
//create hovering effect

const container = document.querySelector("#container");

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

    const sizeContainer = 400;
    const sizeSquare = sizeContainer/numSquaresPerSide;

    for(let i = 1; i <= numSquaresPerSide ** 2; i++) {
        const squares = createSquare(sizeSquare); 
        container.appendChild(squares);
    }
};



const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const numSquaresPerSide = parseInt(prompt("Enter the number of squares per side for the new grid"));
    if (!isNaN(numSquaresPerSide) && 0 < numSquaresPerSide <= 100) {
        return createGrid(numSquaresPerSide);
    } else {
        alert("Please enter a valid number")
    }
});


