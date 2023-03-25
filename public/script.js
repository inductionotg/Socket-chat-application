var socket = io();
setInterval(()=>{
    socket.emit('from_client')
},2000)


socket.on('from_server',()=>{
    console.log('Collected a new event from server')
    const div = document.createElement('div');
    div.innerText = 'New event from server'
    console.log('div')
    document.body.appendChild(div)
})
var btn = document.getElementById('btn')
console.log(btn)