'use strict';
const server = require('./server.js');
require('dotenv').config();
const PORT = process.env.PORT || 5000 ;

server.start(PORT);

