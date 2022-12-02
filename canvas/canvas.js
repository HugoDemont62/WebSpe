const ctx = document.querySelector('canvas').getContext('2d');

// ctx.fillRect(13, 21, 180, 180);
// ctx.clearRect(40, 50, 120, 120);
// ctx.strokeRect(50, 60, 100, 100)
// ctx.fillRect(55, 65, 90, 90);

// for (let i = 0; i < 20; i++) {

//     ctx.fillRect(0, 0, 15, 10);
//     ctx.translate(20, 0);

// }

// for (let i = 0; i < 10; i++) {
    
//         for (let j = 0; j < 20; j++) {
    
//             ctx.fillRect(0, 0, 15, 10);
//             ctx.translate(20, 0);
    
//         }
    
//         ctx.translate(-20 * 20, 20);
    
//     }

// const squares=["rgb(255,255,0,0.5)", "rgb(255,0,0,0.5)", "rgb(0,255,0,0.5)", "rgb(0,0,255,0.5)", "rgb(255,255,0,0.5)"];

// squares.forEach(element => {
    
//     ctx.fillStyle=element;
//     ctx.fillRect(0,0,100,100);
//     ctx.translate(40,50);

// });


// ctx.strokeStyle="green";
// ctx.beginPath();
// ctx.moveTo(200,200);
// ctx.lineTo(200,300);
// ctx.moveTo(250,250);
// ctx.lineTo(150,250);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = 'green';
// ctx.lineWidth=10;
// ctx.lineCap='round';
// ctx.moveTo(10,10);
// ctx.lineTo(50,50);
// ctx.moveTo(50,10);
// ctx.lineTo(10,50);
// ctx.shadowColor='black';
// ctx.shadowBlur=10;
// ctx.shadowOffsetX=5;
// ctx.shadowOffsetY=5;
// ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(10,10);
ctx.lineTo(20,20);
ctx.lineTo(10,30);
ctx.fill();
