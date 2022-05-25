const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');

const server = https.createServer({
    cert: fs.readFileSync("/home/xchoma/webte.fei.stuba.sk-chain-cert.pem"),
    key: fs.readFileSync("/home/xchoma/webte.fei.stuba.sk.key")
})

server.listen(9000);

const ws = new WebSocket.Server( { server } );

ws.on('connection', (socket) => {
    socket.send(JSON.stringify("Connected"));
    socket.on("message", (data) => {
        const msg = JSON.parse(data.toString());
        if(msg.name){
            ws.clients.forEach(client => {
                client.send(JSON.stringify({'name': msg.name}));
            })
        }
    })
})

