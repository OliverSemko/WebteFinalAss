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
        document.getElementById("name_name").innerText = language.name_input
        document.getElementById("login_butt").innerText = language.login
        document.getElementById("changeUser").innerText = language.logout
        document.getElementById("popis_api").innerText = language.popis
        document.getElementById("navod_api").innerText = language.navod
        document.getElementById("popis_text").innerText = language.popis_text
        document.getElementById("navod_text").innerText = language.navod_text
        document.getElementById("speed_of_chart").innerText = language.speed
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
            "                 Clicking the download CSV button saves the measured value record to the device.\n" +
            "                 The page download button saves the page description and instructions for use.\n" +
            "                 By entering the name at the top left of the website and then pressing the login button,\n" +
            "                 the user logs in and lists at the bottom of the page.\n" +
            "                 For this option, it is necessary to turn on the server via the node.",
        speed: "Speed of chart (ms):"
    },
    svk: {
        command: "Zadajte pr??kaz:",
        command_placeholder: "Pr??kaz...",
        title: "Z??vere??n?? zadanie",
        submit: "Potvr??",
        label_car: "Zobrazenie auta",
        label_graph: "Zobrazenie grafu",
        name_input: "Zadaj meno:",
        download: "Stiahnu?? str??nku",
        send_csv: "Posla?? CSV",
        export_csv: "Stiahnu?? CSV",
        login: "Prihl??si??",
        logout: "Odhl??si??",
        popis: "Popis API",
        navod: "N??vod na pou??itie str??nky",
        popis_text: "Str??nka je vytvoren?? na zobrazenie pr??ce tlmi??ov.\n" +
            "                Za pomoci octave si vypo????tame ??daje ktor?? vyp????eme do grafu a taktie?? zobraz??me cez auto.\n" +
            "                Na str??nke je mo??n?? generova?? CSV logy, tie je mo??n?? ulo??i?? do zariadenia, alebo si zasla?? na e-mailov?? adresu.\n" +
            "                POST met??da je vyu????van?? na odosielanie a z??pis d??t do datab??zy.\n" +
            "                GET met??da n??m sl????i na z??skanie d??t do grafu posielame v nej ve??kos?? 'r'.",
        navod_text: "Je potrebn?? zada?? ????seln?? ??daj do textov??ho inputu ktor?? sa spracuje.\n" +
            "            N??sledne sa vygeneruje prek????ka ktor?? zapr????in?? pohyb tlmi??ov ktor??ch sa hodnoty zobrazia na grafe a\n" +
            "            vizualiz??ci?? na aute.\n" +
            "            Je mo??n?? zmeni?? jazyk str??nky zo slovensk??ho do anglick??ho a naopak.\n" +
            "            Klinut??m na tla????tko posla?? CSV sa zap????e v??etky z??znami meran?? do csv s??boru a ten sa odo??le na mail\n" +
            "            u????vate??a.\n" +
            "            Klinut??m na tla????tko stiahnu?? CSV sa ulo???? do zariadenia csv z??znam s namern??mi hodnotami.\n" +
            "            Tla????tko stiahnutie str??nky ulo???? opis str??nky a n??vod pou??itia.\n" +
            "            Zadan??m mena v ??avej hornej ??asti web str??nky a n??sledn??m stla??en??m tla????tka prihl??senie,\n" +
            "            sa po????vate?? prihl??si a vyp????e v dolnej ??asti str??nky. \n" +
            "            Pre t??to mo??nos?? je potrebn?? zapnutie servera cez node.",
        speed: "R??chlos?? vykres??ovania (ms):"
    }
}
