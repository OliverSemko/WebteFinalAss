const selectedFlag = document.getElementById('flag');
let currentFLag = "britain";
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
        document.getElementById("label_prikaz").innerText = language.command
        document.getElementById("nadpis").innerText = language.title
        document.getElementById("command").placeholder = language.command_placeholder
        document.getElementById("input_submit").value = language.submit
        document.getElementById("car_label").innerText = language.label_car
        document.getElementById("graph_label").innerText = language.label_graph
        document.getElementById("pdf").innerText = language.download
        document.getElementById("send_mail").innerText = language.send_csv
        document.getElementById("download").innerText = language.export_csv
        document.getElementById("name").innerText = language.name_input
        document.getElementById("login_butt").innerText = language.login
        document.getElementById("changeUser").innerText = language.logout
        document.getElementById("popis_api").innerText = language.popis
        document.getElementById("navod_api").innerText = language.navod
        document.getElementById("popis_text").innerText = language.popis_text
        document.getElementById("navod_text").innerText = language.navod_text
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
        label_graph: "Show graph",
        name_input: "Your name:",
        download: "Download site",
        send_csv: "Sent CSV",
        export_csv: "Export CSV",
        login: "Log in",
        logout: "Log out",
        popis: "API Description",
        navod: "How to use this site",
        popis_text: "The page is created to display the work of shock absorbers.\n" +
            "                 With the help of octave, we calculate the data that we write in the graph and also display via the car.\n" +
            "                 It is possible to generate CSV logs on the site, they can be saved to the device or sent to an e-mail address.\n" +
            "                 The POST method is used to send and write data to the database.\n" +
            "                 The GET method is used to obtain the data in the graph we send in it the size 'r'.",
        navod_text: "It is necessary to enter a numeric data into the text input to be processed.\n" +
            "                 Subsequently, an obstacle is generated which causes the movement of the dampers whose values are displayed on the graph and\n" +
            "                 visualizations on the car.\n" +
            "                 It is possible to change the language of the site from Slovak to English and vice versa.\n" +
            "                 By clicking on the send CSV button, all measurement records are written to a csv file and it is sent to the user's mail.\n" +
            "                 Clicking the download CSV button saves the measured value record to the csv device.\n" +
            "                 the user input is written to the csv file.\n" +
            "                 The page download button saves the page description and instructions for use.\n" +
            "                 By entering the name at the top left of the website and then pressing the login button,\n" +
            "                 the user logs in and lists at the bottom of the page."
    },
    svk: {
        command: "Zadajte príkaz:",
        command_placeholder: "Príkaz...",
        title: "Záverečné zadanie",
        submit: "Potvrď",
        label_car: "Zobrazenie auta",
        label_graph: "Zobrazenie grafu",
        name_input: "Zadaj meno:",
        download: "Stiahnuť stránku",
        send_csv: "Poslať CSV",
        export_csv: "Stiahnuť CSV",
        login: "Prihlásiť",
        logout: "Odhlásiť",
        popis: "Popis API",
        navod: "Návod na použitie stránky",
        popis_text: "Stránka je vytvorená na zobrazenie práce tlmičov.\n" +
            "                Za pomoci octave si vypočítame údaje ktoré vypíšeme do grafu a taktiež zobrazíme cez auto.\n" +
            "                Na stránke je možné generovať CSV logy, tie je možné uložiť do zariadenia, alebo si zaslať na e-mailovú adresu.\n" +
            "                POST metóda je využívaná na odosielanie a zápis dát do databázy.\n" +
            "                GET metóda nám slúži na získanie dát do grafu posielame v nej veľkosť 'r'.",
        navod_text: "Je potrebné zadať číselný údaj do textového inputu ktorý sa spracuje.\n" +
            "                Následne sa vygeneruje prekážka ktorá zapríčiní pohyb tlmičov ktorých sa hodnoty zobrazia na grafe a\n" +
            "                vizualizácií na aute.\n" +
            "                Je možné zmeniť jazyk stránky zo slovenského do anglického a naopak.\n" +
            "                Klinutím na tlačítko poslať CSV sa zapíše všetky záznami merní do csv súboru a ten sa odošle na mail užívateľa.\n" +
            "                Klinutím na tlačítko stiahnuť CSV uloží sa do zariadenia csv záznam z namernými hodnotami.\n" +
            "                sa zapíše input užívateľa do csv súboru.\n" +
            "                Tlačítko stiahnutie stránky uloží opis stránky a návod použitia.\n" +
            "                Zadaním mena v ľavej hornej časti web stránky a následným stlačením tlačítka prihlásenie,\n" +
            "                sa požívateľ prihlási a vypíše v dolnej časti stránky."
    }
}
