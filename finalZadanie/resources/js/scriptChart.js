let dataFromResponse = [];
const csvFileData = [];

let parsed
async function funkcia(){
    const response = await fetch("../views/config.json")
    parsed = await response.json()
}
funkcia()

function getData(event) {
    if(parsed.apiKey === 'b54c856f-5e7d-4461-a6db-dab55aff3576') {
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
                upCar()
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
        console.log(dataFromResponse);
        // fnGenerateChart(dataFromResponse);}
    } else {
        if(window.location.hash === '#eng')
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
        drawCar(dataSet[i])

        let subarray = dataSet.slice(0, i + 1);
        chart.updateSeries([{
            data: subarray
        }])
    }
}

const clearCanvas = () => {
    const canvas = document.getElementById("carCanvas");

    const context = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // context.fillStyle = "#FFFFFF";
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // context.fillStyle = "#FFFFFF";
    // context.fillStyle = "#000000";
}

async function upCar() {
    clearCanvas()
    drawCar(0)
    await sleep(4)
    clearCanvas()
    drawCar(10)
    await sleep(4)
    clearCanvas()
    clearCanvas()
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
