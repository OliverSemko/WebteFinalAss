<?php
$x = $_POST["r"];
?>
<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Finalne zadanie</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1 id="nadpis">Zaverecne zadanie</h1>
<div class="container">
    <form action="index.php" method="post">
        <label for="command">Zadanie príkazu:</label><br>
        <textarea id="command" name="command">Dajaky prikaz ktory sem zadas</textarea><br>
<!--        <input type="text" id="command" name="command">-->
        <input type="submit" value="Submit" class="btn btn-primary">
    </form>
    <h1>CAVKO</h1>
    <div class="canvas">
        <canvas id="myCanvas"></canvas>
        <canvas id="CanvasChart"></canvas>
    </div>
</div>
<?php
echo $x;
?>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="scriptChart.js"></script>
</body>
</html>