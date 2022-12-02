const canvas = this.__canvas = new fabric.Canvas('c1');
// const canvas = this.__canvas = new fabric.StaticCanvas('c1');

const rect1 = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'green',
    width: 20,
    height: 20,
    // angle : 45,
});

canvas.add(rect1);

canvas.backgroundColor = 'black';

canvas.setWidth(500);

canvas.setHeight(500);

console.log("largeur du canvas : ",canvas.width)

const haut = document.getElementById('haut');
const bas = document.getElementById('bas');
const right = document.getElementById('droite');
const left = document.getElementById('gauche');
const btn = document.getElementById('rotate');

btn.addEventListener('click', () => {
    rect1.rotate(rect1.angle+45);
    canvas.renderAll();
});

right.addEventListener('click', () => {
    rect1.left += 10;
    canvas.renderAll();
    if (rect1.left > 490) {
        rect1.left = -5;
    }
});

left.addEventListener('click', () => {
    rect1.left -= 10;
    canvas.renderAll();
    if (rect1.left < 0) {
        rect1.left = 500;
    }
});

haut.addEventListener('click', () => {
    rect1.top -= 10;
    canvas.renderAll();
    if (rect1.top < 0) {
        rect1.top = 500;
    }
});

bas.addEventListener('click', () => {
    rect1.top += 10;
    canvas.renderAll();
    if (rect1.top > 490) {
        rect1.top = 0;
    }
});

const colors = ['blue', 'yellow'];

haut.addEventListener('click', () => {
    rect1.set('fill', colors[Math.floor(Math.random() * colors.length)]);
    canvas.renderAll();
});

bas.addEventListener('click', () => {
    rect1.set('fill', colors[Math.floor(Math.random() * colors.length)]);
    canvas.renderAll();
});

right.addEventListener('click', () => {
    rect1.set('fill', colors[Math.floor(Math.random() * colors.length)]);
    canvas.renderAll();
});

left.addEventListener('click', () => {
    rect1.set('fill', colors[Math.floor(Math.random() * colors.length)]);
    canvas.renderAll();
});

btn.addEventListener('click', () => {
    rect1.set('fill', colors[Math.floor(Math.random() * colors.length)]);
    canvas.renderAll();
});
