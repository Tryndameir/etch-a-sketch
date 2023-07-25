const container = document.querySelector('.container');
const canvasSize = document.querySelector('.button');
const column = document.createElement('div');
column.classList.add('box');
const row = document.createElement('div'); //create a div called boxes
row.classList.add('box'); //give it a class of 'box'
let size = 16;

for (let i = 0; i < size; i++) { // loop to generate canvas
    const column = document.createElement('div');
    column.classList.add('box');
    for (let j = 0; j < size; j++) {
    const row = document.createElement('div');
    row.style.cssText = 'border: solid; border-width: 1px; border-color: black; width: 50px; height: 50px';
    row.classList.add('box');
    column.appendChild(row);
    }
    container.appendChild(column);
    console.log(size);
}

canvasSize.addEventListener('click', () => { //event listener for when user clicks canvasSize botton
    size = prompt("Select canvas size");
    container.replaceChildren(column, container.children);
    container.innerHTML = "";
    for (let i = 0; i < size; i++) { // loop to generate canvas
        const column = document.createElement('div');
        column.classList.add('box');
        for (let j = 0; j < size; j++) {
        const row = document.createElement('div');
        row.style.cssText = 'border: solid; border-width: 1px; border-color: black; width: 50px; height: 50px';
        row.classList.add('box');
        column.appendChild(row);
        }
        container.appendChild(column);
        console.log(size);
    }
});


    const square = document.querySelectorAll('.box');
    //if (square !== null) {
        //console.log(square);
   // }

square.forEach(box => { // event listener for when user clicks inside canvas to sketch
    box.style.backgroundColor = 'white';
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'red';    
        console.log(box.style.backgroundColor);
    });
});


    
        

    
    
