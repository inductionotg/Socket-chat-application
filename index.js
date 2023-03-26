const express = require('express')
const PORT = 3000
const app = express()
const http = require('http')

const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)

app.use('/',express.static(__dirname +'/public'))
io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)

    socket.on('msg_send',(data)=>{
        console.log(data)
        //io.emit('msg_rcd',data)
        socket.emit('msg_rcd',data)
    })

  
})
server.listen(PORT,()=>{
    console.log('Server started at Port',PORT)
})