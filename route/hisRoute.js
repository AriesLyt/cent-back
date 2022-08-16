const router = require('koa-router')()

//func
const { selectHis } = require('../Controller/hisController')

router.post("/shis", selectHis)

module.exports = router