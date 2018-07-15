const mongoose = require('mongoose');

var tweetschema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: Number
});

var tweets = mongoose.model('tweet', tweetschema);


module.exports = tweets;