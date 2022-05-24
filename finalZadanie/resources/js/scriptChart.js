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
    console.log(generateApiKey());
    console.log(dataFromResponse);
}
//
// const data = {
//     labels: label,
//     datasets: [{
//         label: 'My First Dataset',
//         data: dataFromResponse,
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
