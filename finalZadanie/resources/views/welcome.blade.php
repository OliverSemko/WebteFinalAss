<?php
error_reporting(0);
ini_set('display_errors', 0);
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
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>

<h1 id="nadpis">Záverečné zadanie</h1>
<div id="flag" onclick="flag()">
</div>
<div class="container">
    <form action="welcome.blade.php" method="post">
        <label for="command" id="label_prikaz">Zadajte príkaz:</label><br>
        <textarea id="command" name="command" placeholder="Príkaz..."></textarea><br>
        <input type="submit" value="Potvrď" id="input_submit" class="btn btn-primary">
    </form>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="vehicle" name="vehicle" value="Car" onclick="foo()">
        <label for="vehicle" id="car_label">Zobrazenie auta</label><br>
    </div>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="chart" name="chart" value="Chart" onclick="foo()" checked>
        <label for="chart" id="graph_label">Zobrazenie grafu</label><br>
    </div>
    <div class="canvas">
        <canvas id="carCanvas">
        </canvas>
        <canvas id="CanvasChart"></canvas>
    </div>
</div>

<?php
echo "<pre>";
$output = "";
exec('octave-cli --eval "pkg load control;
 m1 = 2500; m2 = 320;k1 = 80000; k2 = 500000;b1 = 350; b2 = 15020;
 A=[0 1 0 0;-(b1*b2)/(m1*m2) 0 ((b1/m1)*((b1/m1)+(b1/m2)+(b2/m2)))-(k1/m1) -(b1/m1);b2/m2 0 -((b1/m1)+(b1/m2)+(b2/m2)) 1;
 k2/m2 0 -((k1/m1)+(k1/m2)+(k2/m2)) 0];B=[0 0;1/m1 (b1*b2)/(m1*m2);
 0 -(b2/m2);(1/m1)+(1/m2) -(k2/m2)];C=[0 0 1 0]; D=[0 0];Aa = [[A,[0 0 0 0]\'];
 [C, 0]];Ba = [B;[0 0]];Ca = [C,0]; Da = D;K = [0 2.3e6 5e8 0 8e6];
 sys = ss(Aa-Ba(:,1)*K,Ba,Ca,Da);t = 0:0.01:5; r =0.1; initX1=0; initX1d=0;initX2=0;
 initX2d=0;[y,t,x]=lsim(sys*[0;1],r*ones(size(t)),t,[initX1;initX1d;initX2;initX2d;0]);y"', $output);
echo "</pre>";
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
<script src="../js/scriptChart.js"></script>
<script src="../js/main.js"></script>
<script src="../js/script.js"></script>
</body>
</html>
