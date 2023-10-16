const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('id', 'container');

const button = document.createElement('button');
button.textContent = "New Grid";
button.addEventListener('click', () => {
    let num = Number(prompt("How many squares do you want per side? "));
    if (num > 100) {
        num = 100;
    } else if (num < 1) {
        num = 1;
    };
    container.replaceChildren();
    createRows(num);
});

body.appendChild(button);
body.appendChild(container);

createRows(1);

function createRows(num) {
    for (let i=1; i<=num; i++) {
        console.log("Creating new row");
        createRow(num);
    };
}

function createRow(num) {
    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    container.appendChild(newRow);
    console.log("New row created");
    newRow.setAttribute('id', 'newRow');
    for (let i=1; i<=num; i++) {
        createGrid();
    };
    newRow.removeAttribute('id', 'newRow');
}

function createGrid() {
    let newGrid = document.createElement('div');
    let newRow = document.querySelector('#newRow');
    newRow.appendChild(newGrid);
    newGrid.addEventListener('mouseover', () => {
        newGrid.style.backgroundColor = randomRGB();
    });
    newGrid.addEventListener('mouseout', () => {
        rgbNum = rgbNum * 9/10;
        newGrid.style.backgroundColor = randomRGB(rgbNum);
    });
    newGrid.setAttribute('class', 'grid');
}

let rgbNum = 255;

function randomRGB(maxNum=255) {
    const rValue = Math.floor(Math.random() * maxNum);
    const gValue = Math.floor(Math.random() * maxNum);
    const bValue = Math.floor(Math.random() * maxNum);
    return `rgb\(${rValue} ${gValue} ${bValue}\)`
}