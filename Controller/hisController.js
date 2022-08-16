const HisDao = require('../dao/hisDao')

const addHis = async data => {
  const res = await HisDao.addHis(data)
  console.log(res)
}

const selectHis = async (ctx) => {
  let { min, max } = ctx.request.body
  const res = await HisDao.selectHis(min, max)
  ctx.body = res
}


module.exports = {
  addHis,
  selectHis
}