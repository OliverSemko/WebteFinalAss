const centreX = 80; const centreY = 100;
const radius = 25;
const rotateAngle = 36 * Math.PI / 180;
const startAngle = 0 * Math.PI / 180;
const endAngle = 36 * Math.PI / 180;
let counter = 0;
let animFlag;
const colours = ["black", "yellow", "black", "yellow", "black", "yellow", "black", "yellow", "black", "yellow"];


const drawCar=(y)=>{
    const canvas = document.getElementById("carCanvas");
    const ctx1 = canvas.getContext("2d");
    ctx1.fillStyle="black"
    ctx1.rect(40,y+50,70,20)
    ctx1.rect(110,y+50,10,40)
    ctx1.rect(0,y+20,50,60)
    ctx1.fill();
}

function drawWheel() {

    var canvas = document.getElementById("carCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");


        for (let i = 0; i < 10; i++) {
            ctx.fillStyle = colours[i];
            ctx.translate(centreX, centreY);
            ctx.rotate(rotateAngle);
            ctx.translate(-centreX, -centreY);
            ctx.beginPath();
            ctx.moveTo(centreX, centreY);
            ctx.lineTo(centreX + radius, centreY);
            ctx.arc(centreX, centreY, radius, startAngle, endAngle, false);

            ctx.closePath();
            ctx.fill();

        }
    }
}

function rotateWheel(rnd) {
    const canvas = document.getElementById("carCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.translate(centreX, centreY);
        ctx.rotate(rotateAngle);
        ctx.translate(-centreX, -centreY);

        drawWheel();

        counter++;
        if (counter > rnd) {
            counter = 0;
            clearInterval(animFlag);
        }
    }
}

setInterval(function() {
   rotateWheel(60)
}, 100);
drawCar(0)
drawCar(10)