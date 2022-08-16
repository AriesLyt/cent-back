const Koa = require("koa");
const koa = new Koa()
const koaBody = require('koa-body');


// ! router
const { hisRouter } = require("./route/index")

koa.use(koaBody())

koa.use(hisRouter.routes())

// server.use(router.routes(), router.allowedMethods());

koa.listen('8718', ()=>{ console.log("8718") })