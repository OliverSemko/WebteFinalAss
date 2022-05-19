<?php
$x = $_POST["r"];
?>
<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Finalne zadanie</title>
    <link rel="icon" type="image/x-icon" href="https://icon-library.com/images/icon-favicon/icon-favicon-19.jpg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1 id="nadpis">Záverečné zadanie</h1>
<div id="flag" onclick="flag()">
</div>
<!--<select id="langselector" >-->
<!--      onchange="loadlang()">-->
<!--    <option value="en" id="En">English</option>-->
<!--    <option value="sk" id="Sk">Slovak</option>-->
<!--</select>-->
<div class="container">
    <form action="index.php" method="post">
        <label for="command" id="label_prikaz">Zadajte príkaz:</label><br>
        <textarea id="command" name="command" placeholder="Príkaz..."></textarea><br>
        <input type="submit" value="Potvrď" id="input_submit" class="btn btn-primary">
    </form>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="vehicle" name="vehicle" value="Car" onclick="foo()">
        <label for="vehicle">Zobrazenie auta</label><br>
    </div>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="chart" name="chart" value="Chart" onclick="foo()" checked>
        <label for="chart">Zobrazenie grafu</label><br>
    </div>
    <div class="canvas">
        <canvas id="carCanvas">
        </canvas>
        <canvas id="CanvasChart"></canvas>
    </div>
</div>

<?php
echo $x;
?>
<footer>
    <p>&copy; Oliver Semko, Marián Choma, Jakub Szabo, Dávid Kurek </p>
</footer>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="scriptChart.js"></script>
<script src="main.js"></script>
<script src="script.js"></script>
</body>
</html>