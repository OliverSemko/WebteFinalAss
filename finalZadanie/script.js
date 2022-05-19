var checkboxCar = document.getElementById("vehicle");
var checkboxChart = document.getElementById("chart");
var Car = document.getElementById("carCanvas");
var Chart = document.getElementById("CanvasChart");

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
    // console.log(Car);
    // console.log(Chart)
}

function flag() {
    var selectedFlag = document.getElementById('flag');
    if (selectedFlag.style.backgroundImage === 'url("https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png")'){
        selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png)";
}else {
        selectedFlag.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png)";
    }
    // console.log(selectedFlag.style.backgroundImage);
}