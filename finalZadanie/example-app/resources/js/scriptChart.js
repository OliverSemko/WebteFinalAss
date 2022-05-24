let dataFromResponse = [];

function getData(event){
    event.preventDefault();
    dataFromResponse = [];
    const command = document.getElementById("command");
    fetch("https://site82.webte.fei.stuba.sk/final/example-app/resources/views/octave.php?r=" + command.value)
        .then(response => response.json())
        .then(response => {
            for (let i = 2; i < response.length; i++){
                let responseData = response[i].trim();
                dataFromResponse.push(responseData);
            }
            dataFromResponse.pop();
            dataFromResponse.push("0.00000")
        })
    // console.log(generateApiKey());
    console.log(dataFromResponse);
    // fnGenerateChart(dataFromResponse);
}



const data = {
    datasets: [{
        label: 'Graf',
        // data: dataFromResponse,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const ctx = document.getElementById('CanvasChart').getContext('2d');
const CanvasChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});
console.log(ctx);
// CanvasChart.addData(dataFromResponse);

// const ctx = document.getElementById('CanvasChart').getContext('2d');
// function fnGenerateChart(xValues) {
//     console.log(xValues);
//     const CanvasChart = new Chart(ctx, {
//         type: "line",
//         data: {
//             labels: xValues,
//             datasets: [{
//                 label: 'Graf',
//                 backgroundColor: 'rgb(75, 192, 192)'
//             }]
//         }
//     });
// }
// console.log(ctx);

// window.onload = function () {
//
//     var dps = []; // dataPoints
//     var chart = new CanvasJS.Chart("CanvasChart", {
//         title :{
//             text: "Dynamic Data"
//         },
//         data: [{
//             type: "line",
//             dataPoints: dps
//         }]
//     });
//
//     var xVal = 0;
//     var yVal = 100;
//     var updateInterval = 1000;
//     var dataLength = 20; // number of dataPoints visible at any point
//
//     var updateChart = function (count) {
//
//         count = count || 1;
//
//         for (var j = 0; j < count; j++) {
//             yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
//             dps.push({
//                 x: xVal,
//                 y: yVal
//             });
//             xVal++;
//         }
//
//         if (dps.length > dataLength) {
//             dps.shift();
//         }
//
//         chart.render();
//     };
//
//     updateChart(dataLength);
//     setInterval(function(){updateChart()}, updateInterval);
//
// }
