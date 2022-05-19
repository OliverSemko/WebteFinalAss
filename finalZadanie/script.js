var checkboxCar = document.getElementById("vehicle");
var checkboxChart = document.getElementById("chart");
var Car = document.getElementById("carCanvas");
var Chart = document.getElementById("CanvasChart");
var selectedFlag = document.getElementById('flag');
var currentFLag = "britain"
selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png)";

function foo() {
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

function flag() {
    if(currentFLag === "britain")
        window.location.hash='#eng';
    else
        window.location.hash='#svk';

    let language
    if(window.location.hash){
        if (window.location.hash === "#eng")
            language = langdata.eng
        if (window.location.hash === "#svk")
            language = langdata.svk
        document.getElementById("label_prikaz").textContent = language.command
        document.getElementById("nadpis").textContent = language.title
        document.getElementById("command").placeholder = language.command_placeholder
        document.getElementById("input_submit").value = language.submit
        document.getElementById("car_label").textContent = language.label_car
        document.getElementById("graph_label").textContent = language.label_graph
    }

    if (selectedFlag.style.backgroundImage === 'url("https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png")') {
        selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png)";
        currentFLag = "slovakia"
    } else {
        selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png)";
        currentFLag = "britain"
    }

}

let langdata = {
    eng: {
        command: "Write your command:",
        command_placeholder: "Command...",
        title: "Final assignment",
        submit: "Submit",
        label_car: "Show car",
        label_graph: "Show graph"
    },
    svk: {
        command: "Zadajte príkaz:",
        command_placeholder: "Príkaz...",
        title: "Záverečné zadanie",
        submit: "Potvrď",
        label_car: "Zobrazenie auta",
        label_graph: "Zobrazenie grafu"
    }
}