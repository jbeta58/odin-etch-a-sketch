// Create a grid of i x i squares (max 100 x 100), using flexbox

// Starting with 16 x16 squares when page loads
let gridSize = 16;
// select container
const container = document.querySelector("#gridContainer");
//create 16 x 16 grid
createGrid();

// Create listener for each square
// If mouse enter, set backgorund color to black and increase opacity by 0.1
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("gridColumns")) {
        // set background to black
        e.target.classList.add("active");
        // if opacity 0.9 or greater, set it to 1
        if (Number(e.target.style.opacity) >= 0.9) {
            e.target.style.opacity = 1;
        } else {
            //else increase opacity by 0.1
            e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }
    }
});

//Create listener for Button
const btn = document.querySelector("#gridButton");
btn.addEventListener("click", () => {
//If button clicked ask for grid size
    gridSize = Number(prompt("What size would you like for the grid?"));
    //if it is a number, it is positive and less or equal than 100, then
    if (gridSize > 0 && gridSize <= 100) {
        //run createGrid function (include previous grid deletion)
        createGrid();
    } else {
        //else Show error message
        alert("Error. Please write a number between 1 and 100");
    }
});


// function to delete current grid and draw new one
function createGrid() {
    //delete current grid
    container.innerHTML = "";
    // create new grid
    for (let i = 0; i < gridSize; i++ ) {
        const row = document.createElement("div");
        row.classList.add("gridRows");
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement("div");
            column.classList.add("gridColumns");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}