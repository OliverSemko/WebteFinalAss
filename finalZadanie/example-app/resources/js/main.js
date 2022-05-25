// const centreX = 80; const centreY = 100;
// const radius = 25;
// const rotateAngle = 36 * Math.PI / 180;
// const startAngle = 0 / 180;
// const endAngle = 36 * Math.PI / 180;
// let counter = 0;
// let animFlag;
// const colours = ["black", "yellow", "black", "yellow", "black", "yellow", "black", "yellow", "black", "yellow"];
//
//
// const drawCar=(y,color)=>{
//     const canvas = document.getElementById("carCanvas");
//     const ctx1 = canvas.getContext("2d");
//     ctx1.fillStyle=color;
//     ctx1.rect(40,10*y+50,70,20)
//     ctx1.rect(110,10*y+50,10,40)
//     ctx1.rect(0,10*y+20,50,60)
//     ctx1.fill();
// }
//
// function drawWheel(positionOfWheel) {
//
//     const canvas = document.getElementById("carCanvas");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//
//
//         for (let i = 0; i < 10; i++) {
//             ctx.fillStyle = colours[i];
//             ctx.translate(centreX, centreY+positionOfWheel);
//             ctx.rotate(rotateAngle);
//             ctx.translate(-centreX, -centreY-positionOfWheel);
//             ctx.beginPath();
//             ctx.moveTo(centreX, centreY+positionOfWheel);
//             ctx.lineTo(centreX + radius, centreY+positionOfWheel);
//             ctx.arc(centreX, positionOfWheel+centreY, radius, startAngle, endAngle, false);
//
//             ctx.closePath();
//             ctx.fill();
//
//         }
//     }
// }
//
// function rotateWheel(rnd, positionOfWheel) {
//     const canvas = document.getElementById("carCanvas");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         ctx.translate(centreX, centreY+positionOfWheel);
//         ctx.rotate(rotateAngle);
//         ctx.translate(-centreX, -centreY-positionOfWheel);
//
//         drawWheel(positionOfWheel);
//
//         counter++;
//         if (counter > rnd) {
//             counter = 0;
//             clearInterval(animFlag);
//         }
//     }
// }

 // setInterval(function() {
 //    rotateWheel(10, 10)
 // }, 100);
 // drawCar(0)



function foo() {
    const checkboxCar= document.getElementById("vehicle");
    let Car = document.getElementById("Car");
    const checkboxChart= document.getElementById("chart");
    let Chart = document.getElementById("MyChart");
    if (checkboxCar.checked === true) {
        Car.style.display = "block";
    } else {
        Car.style.display = "none";
    }
    if (checkboxChart.checked === true) {
        Chart.style.display = "block";
    } else {
        Chart.style.display = "none";
    }
}

function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById('popis');
    // Choose the element and save the PDF for our user.
    html2pdf().from(element).save();
}
