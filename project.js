//create squares
//create hovering effect

const container = document.querySelector("#container");

function createSquare(number) {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = number;

    item.addEventListener("mouseenter", () => {
        item.classList.add("hovered");
    });
    item.addEventListener("mouseleave", () => {
        item.classList.remove("hovered");
    });

    return item;
}

for(let i = 1; i <= 256; i++) {
    const square = createSquare(i);
    container.appendChild(square);
} 




