
<?php include 'header-footer/header.php' ?>

<div class="container">
    <form action="welcome.blade.php" method="post">
        <label for="command" id="label_prikaz">Zadajte príkaz:</label><br>
        <textarea id="command" name="command" placeholder="Príkaz..."></textarea><br>
        <input onclick="getData(event)" type="submit" value="Potvrď" name="Potvrď" id="input_submit"
               class="btn btn-primary">
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
require_once "MyPdo.php";
if (isset($_POST["Potvrď"]) && isset($_POST["command"])) {
    try {
        $myPdo = new MyPDO();
        $myPdo->run("INSERT into measurement
            (`date`, `r`, `error`) values (?, ?, ?)",
            [date('d-m-y h:i:s'), $_POST["command"], false]);

    } //catch exception
    catch (Exception $e) {
        $myPdo = new MyPDO();
        $myPdo->run("INSERT into measurement
            (`date`, `r`, `error`) values (?, ?, ?)",
            [date('d-m-y h:i:s'), $_POST["command"], false]);
    }
}

?>

<?php include 'header-footer/footer.php' ?>
