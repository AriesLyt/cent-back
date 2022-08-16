const HisMapping = require("../Mapping/hisMapping");
const { Op } = require('sequelize');

class HisDao {
  constructor(){

  }

  async addHis (data) {
    const res = await HisMapping.create({ ...data })
    return res
  }

  async selectHis (min, max) {
    const res = await HisMapping.findAll({
      order: [
        [
          "id", 'DESC'
        ]
      ],
      limit: max,
      offset: min
    })
    return res.reverse()
  }
}

module.exports = new HisDao()