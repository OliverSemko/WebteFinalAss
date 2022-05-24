let users = [];
let correntUser = ' ';

function addUser(data){
    users.push(data.name);
    correntUser = data.name;

    const div = document.getElementById('users');
    div.innerHTML = "";

    users.forEach(user => {
        const p = document.createElement("p");
        p.innerText = user;
        div.appendChild(p);
    })
    document.getElementById('addUser').style.display = 'none';
    document.getElementById('changeUser').style.display = 'inline-block';
}

function changeUser(){
    document.getElementById('changeUser').style.display = 'none';
    document.getElementById('addUser').style.display = 'inline-block';

    users.pop(getOldUser());

    const div = document.getElementById('users');
    div.innerHTML = "";

    users.forEach(user => {
        const p = document.createElement("p");
        p.innerText = user;
        div.appendChild(p);
    })
}

function getOldUser(){
    let i = 0;

    users.forEach(user => {
        if(user == correntUser)
            return i;
        i++;
    })
}

