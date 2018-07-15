const express = require('express');
const usersRouters = require('./api/users/users.router');
const tweetsRouters = require('./api/tweets/tweets.router');
const mongoose = require('mongoose');
const config = require('./.env');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;

mongoose.connect(options.MONGOURL);

app.use(express.json());

app.use(morgan('combined'));
app.use(compression());

app.use('/api/users', usersRouters);
app.use('/api/tweets', tweetsRouters);

app.listen(_PORT, function() {
    console.log(`The server is running in the port: ${_PORT}`);
});
