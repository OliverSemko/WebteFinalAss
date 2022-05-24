var checkboxCar = document.getElementById("vehicle");
var checkboxChart = document.getElementById("chart");
var Car = document.getElementById("carCanvas");
var Chart = document.getElementById("CanvasChart");
var selectedFlag = document.getElementById('flag');
var currentFLag = "britain"
selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png)";

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
        document.getElementById("input_name").innerText = language.input_name
        document.getElementById("input_mail").innerText = language.input_mail
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
        input_name: "Your name",
        input_mail: "Your e-mail"
    },
    svk: {
        input_name: "Zadaj meno",
        input_mail: "Zadaj e-mail"
    }
}
