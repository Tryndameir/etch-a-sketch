const container = document.querySelector('.container');
const canvasSize = document.querySelector('#btn1');
const color = document.querySelector('#btn2');
let box = document.createElement('div');
//const column = document.createElement('div');
//column.classList.add('box');
//const row = document.createElement('div'); //create a div called boxes
//row.classList.add('box'); //give it a class of 'box'
let size = 16;

for (let i = 0; i < size * size; i++) { // loop to generate canvas
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.cssText = 'border: solid; border-width: 1px; border-color: black';
    let borderOffset = size * 2;
    box.style.width = ((832 - borderOffset) / size) + "px";
    container.appendChild(box);
    console.log(size);
}

canvasSize.addEventListener('click', () => { //event listener for when user clicks canvasSize botton
        do {
            size = prompt("Select a canvas size from 4 to 100");
        }
        while (size < 4 || size > 100);

            container.replaceChildren(box, container.children);
            container.innerHTML = "";
            for (let i = 0; i < size * size; i++) { // loop to generate canvas
                let box = document.createElement('div');
                box.classList.add('box');
                box.style.cssText = 'border: solid; border-width: 1px; border-color: black';
                let borderOffset = size * 2;
                box.style.width = ((832 - borderOffset) / size) + "px";
                container.appendChild(box);
            }

});


const square = document.querySelectorAll('.box');

square.forEach(box => { // event listener for when user clicks inside canvas to sketch
    box.style.backgroundColor = 'white';
    box.addEventListener('click', () => {
        if (box.style.backgroundColor == 'red') {
            box.style.backgroundColor = 'white';
        }

        else {
        box.style.backgroundColor = 'red';
        }    
    });
});


    
        

    
    
