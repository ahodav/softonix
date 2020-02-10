const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config')
const cors = require('cors');

const app = express();

require("./db/db");

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.listen(config.port)
