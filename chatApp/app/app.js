//uses built in websocket class in the browser to create an instance of websocket object
const socket=new WebSocket('ws://localhost:3000');

socket.addEventListener('open',()=>{
    console.log('connected to the server ');
})
//or 
// socket.onopen=()=>{
//     console.log('connected to the server ');
// }
function sendMessage(e){
    e.preventDefault();
    console.log(' i ran')
    const input=document.querySelector('input');
    if(input.value){
        socket.send(input.value);
        input.value='';
    }
     input.focus();
}
document.querySelector('form').addEventListener('submit',sendMessage);

socket.addEventListener('message',({data})=>{
    const ul=document.querySelector('ul');
    const li=document.createElement('li');
    li.textContent=data;
    ul.appendChild(li);
})

//or 
// socket.onmessage=({data})=>{
//     const ul=document.querySelector('ul');
//     const li=document.createElement('li');
//     li.textContent=data;
//     ul.appendChild(li);
// }