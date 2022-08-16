const Koa = require("koa");
const koa = new Koa()


const { socketCon } = require("./socket");


const server = require('http').createServer(koa);

// socket
socketCon(server)


server.listen('8717', ()=>{ console.log("8717") })