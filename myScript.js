const container = document.querySelector('.container');
let canvasSize = document.querySelector('#btn1');
const color = document.querySelector('#btn2');
let box = document.createElement('div');
gridColor = "black";
let size = 16;

for (let i = 0; i < size * size; i++) { // loop to generate canvas
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.cssText = 'border: solid; border-width: 1px; border-color: black; background-color: white';
    let borderOffset = size * 2;
    box.style.width = ((832 - borderOffset) / size) + "px";
    container.appendChild(box);
}

canvasSize.addEventListener('click', () => { //event listener for when user clicks canvasSize botton
        do {
            size = prompt("Select a canvas size from 4 to 100");
        }
        while (size < 4 || size > 100);

        /////////////////////////////////////////////////////////////////////////////////////////////////
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
           }
            
            for (let i = 0; i < size * size; i++) { // loop to generate canvas
                let box = document.createElement('div');
                box.classList.add('box');
                box.style.cssText = 'border: solid; border-width: 1px; border-color: black; background-color: white';
                let borderOffset = size * 2;
                box.style.width = ((832 - borderOffset) / size) + "px";
                container.appendChild(box);
            }
            box = document.querySelectorAll('.box');

    box.forEach(box => { // event listener for when user clicks inside canvas to sketch
    box.addEventListener('click', () => {
        if (box.style.backgroundColor == gridColor) {
            box.style.backgroundColor = 'white';
        }

        else {
        box.style.backgroundColor = gridColor;
        }    
        console.log('clicks');
    });
});
        /////////////////////////////////////////////////////////////////////////////////////////////////

});



box = document.querySelectorAll('.box');
box.forEach(box => { // event listener for when user clicks inside canvas to sketch
    //box.style.backgroundColor = 'white';
    box.addEventListener('click', () => {
        if (box.style.backgroundColor == gridColor) {
            box.style.backgroundColor = 'white';
        }

        else {
        box.style.backgroundColor = gridColor;
        }    
        console.log('clicks');
    });
});

color.addEventListener('click', () => {
    gridColor = prompt("Choose Color: ");
});

const clear = document.querySelector('#btn3');
clear.addEventListener('click', () => {

    for (let i = 0; i < size * size; i++) {
    box[i].style.backgroundColor = 'white';
    }
    console.log("clear clicked");
});


    
        

    
    
