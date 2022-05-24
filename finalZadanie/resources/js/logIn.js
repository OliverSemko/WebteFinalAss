const socket = new WebSocket('wss://site82.webte.fei.stuba.sk:9000');

function logIn(event){
    event.preventDefault();
    let name = document.getElementById('name');
    socket.send(JSON.stringify({'name':name.value}));
}

socket.addEventListener("message", msg => {
    const data = JSON.parse(msg.data);
    addUser(data);
});

