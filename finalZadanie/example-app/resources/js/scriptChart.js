let dataFromResponse = [];
let dataFromResponse2 = [];
const csvFileData = [];

let parsed

async function funkcia() {
    const response = await fetch("../views/config.json")
    parsed = await response.json()
}

funkcia()

function getData(event) {
    if (parsed.apiKey === 'b54c856f-5e7d-4461-a6db-dab55aff3576') {
        event.preventDefault();
        document.getElementById("input_submit").disabled = true
        dataFromResponse = [];
        dataFromResponse2 = [];
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
                // upCar()
                //slowChart(dataFromResponse)
            })
        fetch("https://site82.webte.fei.stuba.sk/final/example-app/resources/views/octave2.php?r=" + command.value)
            .then(response => response.json())
            .then(response => {
                for (let i = 2; i < response.length; i++) {
                    let responseData2 = response[i].trim();
                    dataFromResponse2.push(responseData2);
                }
                dataFromResponse2.pop();
                dataFromResponse2.push("0.00000")
                //upCar()
                slowChart(dataFromResponse, dataFromResponse2)

            })
        //slowChart(dataFromResponse)
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
        // console.log(dataFromResponse);
        // console.log(dataFromResponse2)
        // fnGenerateChart(dataFromResponse);}
    } else {
        if (window.location.hash === '#eng')
            alert("Wrong Api Key!")
        else
            alert("Zlý Api Kľúč!")
    }

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
        name: 'koleso',
        data: dataFromResponse
    }, {
        name: 'karoseria',
        data: dataFromResponse2
    }], xaxis: {
        tickAmount: 10,

    }
}

const chart = new ApexCharts(document.querySelector("#MyChart"), options);
const car = document.getElementById("auticko");
const wheel = document.getElementById("wheel");
// const canvas = document.getElementById("carCanvas");

// let context = canvas.getContext('2d');
chart.render();
// const clearCanvas = () => {
//     // let ctx = canvas.getContext('2d');
//     ctx.globalCompositeOperation='destination-over';
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // ctx.fillStyle="blue";
//     // ctx.fillRect(0,0, 10000,50000);
//     // console.log(context);
//     // canvas.remove();
//     // context.fillStyle = "#FFFFFF";
//     // context.fillRect(0, 0, canvas.width, canvas.height);
//     // context.fillStyle = "#FFFFFF";
//     // context.fillStyle = "#000000";
// }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function slowChart(dataSet, dataSet2) {
    let newposWhe;
    const speed = document.getElementById("chart_speed");
    const input= document.getElementById("command").value;
    let a=parseFloat(input);
    const postCar = 0;
    const posWheel = -115;
    for (let i = 0; i < dataSet2.length; i++) {
        if (speed.value === null) {
            await sleep(4)
        } else {
            await sleep(speed.value)
        }
        //clearCanvas();
        // context.fillStyle="white";
        // context.fillRect(0, 0, canvas.width, canvas.height);
        // // context.globalCompositeOperation='destination-over';
        // drawCar(dataSet2[i],"black")
        // let posCar=car.style.top;
        let newposCar = postCar + dataSet2[i] /1;
        // car.style.top=dataSet2[i]*3+"px";
        car.style.top = newposCar * 3 + "px";
        // posCar+=dataSet2[i];
        // car.style.top=posCar+"px";
        // const posWheel=wheel.offsetTop;
        // wheel.style.top=-dataSet[i]+"px";
        // console.log(posWheel);
        // if (a >= 0) {
        if(dataSet[i]!==0){
            newposWhe = posWheel - dataSet[i] + parseFloat(input);
            wheel.style.top = newposWhe + "px";
        }else{
            wheel.style.top = posWheel + "px";
        }
        // }else {
        //     newposWhe = posWheel + dataSet[i] - parseFloat(input);
        //     wheel.style.top = newposWhe + "px";
        // }
    // wheel.style.top = newposWhe + "px";
    // drawCar(dataSet2[i],"white")
    // clearCanvas();
    // drawCar(dataSet2[i],"red")
    // drawWheel(dataSet[i])
    let subarray = dataSet.slice(0, i + 1);
    let subarray2 = dataSet2.slice(0, i + 1);
    chart.updateSeries([
        {
            name: "koleso",
            data: subarray
        }, {
            name: "karoseria",
            data: subarray2
        }])
}

document.getElementById("input_submit").disabled = false
}


async function upCar() {
    clearCanvas()
    drawCar(0)
    await sleep(4)
    clearCanvas()
    drawCar(10)
    await sleep(4)
    clearCanvas()
    // clearCanvas()
    drawCar(15)
    await sleep(4)
    clearCanvas()
    drawCar(10)
    await sleep(4)
    clearCanvas()
    drawCar(5)
    await sleep(4)
    clearCanvas()
    drawCar(0)
    await sleep(4)
}
