const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const router = require('./routes.js');
const db = require('../database/index.js');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname + '/../client/')))
app.use('/api', router);

app.listen(port, () => {
  console.log('listening on port ', port);
})
