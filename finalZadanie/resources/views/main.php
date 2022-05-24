<?php include 'header-footer/header.php' ?>

<div class="container">
    <form action="welcome.blade.php" method="post">
        <label for="command" id="label_prikaz">Zadajte príkaz:</label><br>
        <textarea id="command" name="command" placeholder="Príkaz..."></textarea><br>
        <input onclick="getData(event)" type="submit" value="Potvrď" id="input_submit" class="btn btn-primary">
    </form>
    <div lass="d-inline">
        <button class="btn btn-primary" id="pdf">Stiahnuť stránku</button>
    </div>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="vehicle" name="vehicle" value="Car" onclick="foo()">
        <label for="vehicle" id="car_label">Zobrazenie auta</label><br>
    </div>
    <div class="form-check form-check-inline">
        <input type="checkbox" id="chart" name="chart" value="Chart" onclick="foo()" checked>
        <label for="chart" id="graph_label">Zobrazenie grafu</label><br>
    </div>
    <div lass="d-inline">
        <form id="mail" action="mailer.php" method="post">
            <button class="btn btn-primary" name="send_mail_button">Send Csv</button>
        </form>
    </div>
    <div class="canvas">
        <canvas id="carCanvas">
        </canvas>
        <div id="MyChart" style="height: 400px; width: 500px"></div>
    </div>


    <div id="popis">
        <h3>Popis API</h3>
        <p>
            Stránka je vytvorená na zobrazenie práce tlmičov.
            Za pomoci octave si vypočítame údaje ktoré vypíšeme do grafu a taktiež zobrazíme cez auto.
            GET metóda nám slúži na získanie dát do grafu posielame v nej veľkosť 'r'.
        </p>
        <h3>Návod na použitie stránky</h3>
        <p>
            Je potrebné zadať číselný údaj do textového inputu ktorý sa spracuje.
            Následne sa vygeneruje prekážka ktorá zapríčiní pohyb tlmičov ktorých sa hodnoty zobrazia na grafe a
            vizualizácií na aute.
            Je možné zmeniť jazyk stránky zo slovenského do anglického a naopak.
            Klinutím na tlačítko CSV sa zapíše input užívateľa do csv súboru.
            Tlačítko stiahnutie stránky uloží opis stránky a návod použitia.

        </p>
    </div>
    <div id="name">

    </div>
</div>

<?php include 'header-footer/footer.php' ?>
