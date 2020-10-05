const Sequelize = require('sequelize')
const db = require('../db')
const shortId = require('shortid')

const Url = db.define('url', {
  original: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shortened: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: shortId.generate
  }
})

module.exports = Url
