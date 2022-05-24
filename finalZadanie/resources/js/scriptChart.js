let dataFromResponse = [];
const csvFileData = [];

function getData(event) {
    event.preventDefault();
    dataFromResponse = [];
    const command = document.getElementById("command");
    fetch("https://site82.webte.fei.stuba.sk/final/example-app/resources/views/octave.php?r=" + command.value)
        .then(response => response.json())
        .then(response => {
            for (let i = 2; i < response.length; i++) {
                let responseData = response[i].trim();
                dataFromResponse.push(responseData);
            }
            dataFromResponse.pop();
            dataFromResponse.push("0.00000")
            console.log(dataFromResponse)
            slowChart(dataFromResponse)
        })
    try {

        let data = {
            r: command.value
        };
        csvFileData.push([new Date().toLocaleString(), command.value, false])
        fetch("https://site82.webte.fei.stuba.sk/final/example-app/resources/views/command.php", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    } catch (e) {
        csvFileData.push([new Date().toLocaleString(), command.value, true])
    }
        // console.log(generateApiKey());
        //console.log(dataFromResponse);
        // fnGenerateChart(dataFromResponse);
}

function download_csv_file() {
    let csv = 'Date, Input r, error\n';

    csvFileData.forEach(function (row) {
        csv += row.join(',');
        csv += "\n";
    });


    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    hiddenElement.download = 'Merania.csv';
    hiddenElement.click();
}


var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: dataFromResponse
    }], xaxis: {
        tickAmount: 10,

    }
}

var chart = new ApexCharts(document.querySelector("#MyChart"), options);

chart.render();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function slowChart(dataSet) {
    for (let i = 0; i < dataSet.length; i++) {

        await sleep(4)


        let subarray = dataSet.slice(0, i + 1);
        chart.updateSeries([{
            data: subarray
        }])
    }
}

//slowChart();

// const data = {
//     datasets: [{
//         label: 'Graf',
//         // data: dataFromResponse,
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// };
// const ctx = document.getElementById('CanvasChart').getContext('2d');
// const CanvasChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         scales: {
//             y: {
//                 stacked: true
//             }
//         }
//     }
// });
// console.log(ctx);


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

//
// var samples = 20;
// var speed = 250;
// let timeout = samples * speed;
// var values = [];
// var labels = [];
// var charts = [];
// var value = 0;
// var scale = 1;
//
// addEmptyValues(values, samples);
//
//
// var originalCalculateXLabelRotation = Chart.Scale.prototype.calculateXLabelRotation
//
// function initialize() {
//     charts.push(new Chart(document.getElementById('CanvasChart'), {
//             type: 'line',
//             data: {
//                 //labels: labels,
//                 datasets: [{
//                     data: values,
//                     backgroundColor: 'rgba(255, 99, 132, 0.1)',
//                     borderColor: 'rgb(255, 99, 132)',
//                     borderWidth: 2,
//                     lineTension: 0.25,
//                     pointRadius: 0
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 animation: {
//                     duration: speed * 1.5,
//                     easing: 'linear'
//                 },
//                 legend: false,
//                 scales: {
//                     xAxes: [{
//                         type: "time",
//                         display: true
//                     }],
//                     yAxes: [{
//                         ticks: {
//                             max: 1,
//                             min: -1
//                         }
//                     }]
//                 }
//             }
//         })
//     );
// }
//
// function addEmptyValues(arr, n) {
//     for (var i = 0; i < n; i++) {
//         arr.push({
//             x: moment().subtract((n - i) * speed, 'milliseconds').toDate(),
//             y: null
//         });
//     }
// }
//
// function rescale() {
//     var padding = [];
//
//     addEmptyValues(padding, 10);
//     values.splice.apply(values, padding);
//
//     scale++;
// }
//
// function updateCharts() {
//     charts.forEach(function (chart) {
//         chart.update();
//     });
// }
//
// function progress() {
//     value = dataFromResponse;
//     values.push({
//         x: new Date(),
//         y: value
//     });
//     values.shift();
// }
//
// function advance() {
//     if (values[0] !== null && scale < 4) {
//         //rescale();
//         updateCharts();
//     }
//
//     progress();
//     updateCharts();
//
//     setTimeout(function () {
//         requestAnimationFrame(advance);
//     }, speed);
// }
//
// window.onload = function () {
//     initialize();
//     advance();
// };
