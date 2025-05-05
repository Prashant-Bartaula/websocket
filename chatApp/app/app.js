const socket=new WebSocket('ws://localhost:3000');

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