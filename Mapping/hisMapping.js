const { DataTypes } = require('sequelize')

const seq = require('../db')

// inf his
const hisMapping = seq.define('centHistory', {
  nickid: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    comment: "nick"
  },
  his: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    comment: "his"
  },
  date: {
    type: DataTypes.CHAR(20),
    allowNull: false,
    comment: "his"
  },
  color: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: "color"
  }
},{
  timestamps: false
})

// hisMapping.sync({force: true})

module.exports = hisMapping