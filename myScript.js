const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
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
            box.addEventListener('click', () => {
            box.style.backgroundColor = 'red';    
               
            });
        });
    
    
