import {WebSocketServer} from 'ws';

//creating a websocket server for websocket connection in place of http server.
const server=new WebSocketServer({port:'3000'});//an instance of websocket server


//server listens for connection and automatically passes a websocket object to the callback
server.on('connection',socket=>{
    console.log('client connected');

    socket.on('message', message=>{
        const b= Buffer.from(message)//string to buffer
        console.log(b.toString())
        socket.send(`${message}`);//send message to the client
    })

    //cleanup code when client disconnect
    socket.on('close',()=>{
        console.log('client disconnected');
    })
});

console.log('websocket server started')