<?php include 'header-footer/header.php' ?>

<div class="container">
    <form action="welcome.blade.php" method="post">
        <label for="command" id="label_prikaz">Zadajte príkaz:</label><br>
        <textarea id="command" name="command" placeholder="Príkaz..."></textarea><br>
        <label for="chart_speed" id="speed_of_chart">Rýchlosť vykresľovania (ms):</label>
        <input id="chart_speed" type="number">
        <input onclick="getData(event)" type="submit" value="Potvrď" id="input_submit" class="btn btn-primary">
    </form>
    <div class="d-flex justify-content-center">
        <div class="form-check form-check-inline">
            <input type="checkbox" id="vehicle" name="vehicle" value="Car" onclick="foo()">
            <label for="vehicle" id="car_label">Zobrazenie auta</label><br>
        </div>
        <div class="form-check form-check-inline">
            <input type="checkbox" id="chart" name="chart" value="Chart" onclick="foo()" checked>
            <label for="chart" id="graph_label">Zobrazenie grafu</label><br>
        </div>
        <div class="">
            <form id="mail" action="mailer.php" method="post">
                <button class="btn btn-primary" name="send_mail_button" id="send_mail">Poslať Csv</button>
            </form>
        </div>
        <div class="">
            <button class="btn btn-primary" onclick="download_csv_file()" id="download">Stiahnuť Csv</button>
        </div>
    </div>

    <div class="canvas ">
        <!--            <canvas id="carCanvas">-->
        <!--            </canvas>-->
        <div id="Car">
            <img src="../img/8b9ad4e071cd63ab3ed298ae5e30b9d1-removebg-preview.png" id="auticko">
            <img src="../img/vehicle-wheel.svg" id="wheel">
        </div>
        <div id="MyChart" style="height: 400px; width: 500px"></div>
    </div>


    <div id="popis">
        <h3 id="popis_api">Popis API</h3>
        <p id="popis_text">
            Stránka je vytvorená na zobrazenie práce tlmičov.
            Za pomoci octave si vypočítame údaje ktoré vypíšeme do grafu a taktiež zobrazíme cez auto.
            Na stránke je možné generovať CSV logy, tie je možné uložiť do zariadenia, alebo si zaslať na e-mailovú
            adresu.
            POST metóda je využívaná na odosielanie a zápis dát do databázy.
            GET metóda nám slúži na získanie dát do grafu posielame v nej veľkosť 'r'.
        </p>
        <h3 id="navod_api">Návod na použitie stránky</h3>
        <p id="navod_text">
            Je potrebné zadať číselný údaj do textového inputu ktorý sa spracuje.
            Následne sa vygeneruje prekážka ktorá zapríčiní pohyb tlmičov ktorých sa hodnoty zobrazia na grafe a
            vizualizácií na aute.
            Je možné zmeniť jazyk stránky zo slovenského do anglického a naopak.
            Klinutím na tlačítko poslať CSV sa zapíše všetky záznami meraní do csv súboru a ten sa odošle na mail
            užívateľa.
            Klinutím na tlačítko stiahnuť CSV sa uloží do zariadenia csv záznam s namernými hodnotami.
            Tlačítko stiahnutie stránky uloží opis stránky a návod použitia.
            Zadaním mena v ľavej hornej časti web stránky a následným stlačením tlačítka prihlásenie,
            sa požívateľ prihlási a vypíše v dolnej časti stránky.
            Pre túto možnosť je potrebné zapnutie servera cez node.
        </p>
    </div>
<!--    </div>-->
    <div id="users">
    </div>
</div>


<?php include 'header-footer/footer.php' ?>
