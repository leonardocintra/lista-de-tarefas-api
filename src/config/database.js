const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/todo')