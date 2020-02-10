var mongoose = require('mongoose');
const config = require('../config/config');

var url = `mongodb://${config.db.name}:${config.db.password}@ds217799.mlab.com:17799/softonix`

mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connect to db');
});

require('../models/user');
require('../models/post');