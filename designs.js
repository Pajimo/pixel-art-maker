// Select color input
let colorPicker = document.getElementById('colorPicker').value;
// Select size input
let gridHeight = document.getElementById('inputHeight').value;
let gridWidth = document.getElementById('inputWidth').value;
let gridSubmit = document.getElementById('submit');
let sizePicker = document.getElementById('sizePicker');
let tablePixel = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()

gridSubmit.addEventListener('click', function(e) {
    //added because it kept refreshing, thereby not being able to run the grid values
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    // Your code goes here!
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;
    let tablePixel = document.getElementById('pixelCanvas');
    // added to stop appendChild function on appending the previous grid with a new grid
    while (tablePixel.firstChild) {
        tablePixel.removeChild(tablePixel.firstChild);
    }
    for (let i = 1; i <= gridHeight; i++){
        let tr = document.createElement('tr');
        tablePixel.appendChild(tr);
        for(let j = 1; j<= gridWidth; j++){
            let td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('mousedown', function() {
                let colorPicker = document.getElementById('colorPicker').value;
                this.style.backgroundColor = colorPicker;
            })
        }
    }
}

// added because of mouseover function
let draw = false;
tablePixel.addEventListener('mousedown', function(e) {
	draw = true;
    // added because the mouseover would keep drawing if no mouseup function === false is added.
	tablePixel.addEventListener('mouseup', function() {
		draw = false;
	});
    // this stops the pen once mouse leaves the grid. "Extremely needed"
    tablePixel.addEventListener('mouseleave', function() {
        draw = false;
    });
    // to keep drawing when moving around the grid with the mouse down
    tablePixel.addEventListener('mouseover', function(e) {
        let colorPicker = document.getElementById('colorPicker').value;
        if (draw) {
            if (e.target.tagName === 'TD') {
                e.target.style.backgroundColor = colorPicker;
            }
        }
    });
});
