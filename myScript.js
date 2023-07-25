const container = document.querySelector('.container');
const canvasSize = document.querySelector('.button');
const div = document.createElement('div');
let size = 16;

canvasSize.addEventListener('click', () => {
    size = prompt("Select canvas size");
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
        const div = document.createElement('div');
        div.style.cssText = 'border: solid; border-width: 1px; border-color: black; width: 50px; height: 50px';
        div.classList.add('box');
        container.appendChild(div);
        }
    }
});

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
    const div = document.createElement('div');
    div.style.cssText = 'border: solid; border-width: 1px; border-color: black; width: 50px; height: 50px';
    div.classList.add('box');
    container.appendChild(div);
    }
}
    const square = document.querySelectorAll('.box');
    //if (square !== null) {
        //console.log(square);
   // }

square.forEach(box => {
    box.style.backgroundColor = 'white';
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'red';    
        console.log(box.style.backgroundColor);
    });
});


    
        

    
    
