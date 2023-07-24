const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.style.cssText = 'border: solid; border-color: black; width: 50px; height: 50px';
    div.classList.add('box');
    container.appendChild(div);
    }
}
