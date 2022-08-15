const Koa = require("koa");
const koa = new Koa()
const server = require('http').createServer(koa);
const { Server } = require("socket.io")
const io = new Server(server, { transports: ['websocket'] })

io.on('connection', socket => {
  console.log("欢迎来到我的私密聊天室")

  socket.on('chat message', msg => {
    console.log(msg)
    io.emit('chat message', msg)
  })

  socket.on("disconnect", () => {
    console.log("Bye bye")
  })
})

server.listen('8717', ()=>{ console.log("8717") })