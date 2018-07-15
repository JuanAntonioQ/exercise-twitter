const mongoose = require('mongoose');

var userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

var users = mongoose.model('user', userschema);
module.exports = users;