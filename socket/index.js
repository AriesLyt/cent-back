
const { Server } = require("socket.io")

const { addHis } = require("../Controller/hisController")

const socketCon = ( server ) => {

  const io = new Server(server, { transports: ['websocket'] })

  io.on('connection', socket => {
    console.log("欢迎来到我的私密聊天室")

    socket.on('chat message', msg => {
      console.log(msg);
      
      addHis(msg)

      io.emit('chat message', msg)
    })

    socket.on("disconnect", () => {
      console.log("Bye bye")
    })
  })

}

module.exports = {
  socketCon
}