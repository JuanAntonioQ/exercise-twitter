const tweets = require('./tweets.model');

module.exports.getTweets = getTweets;
module.exports.getTweetById = getTweetById;
module.exports.createTweetByUser = createTweetByUser;
module.exports.deleteTweetById = deleteTweetById;

function getTweets(req, res) {
    tweets.find({}, (err, doc) => {
        if(err) return res.status(500).send(err);
        doc.sort((a, b) => a.createdAt > b.createdAt ? -1 : (a.createdAt < b.createdAt ? 1 : 0));
        return res.json(doc);
    })
}

function getTweetById(req, res) {
    tweets.findById( {_id : req.params.id}, (err, tweet) => {
        if(err) return res.status(500).send(err);
        return res.status(200).json(tweet);
    } )
}

function createTweetByUser(req, res) {
    const tweet =  tweets({
        text: req.body.text,
        owner: req.params.username,
        createdAt: Date.now()
    });

    tweet.save(function (err) {
        if(err) return res.send(err.message);
        return res.status(201).json(tweet);
    });
}

function deleteTweetById(req, res) {

    tweets.findByIdAndRemove({_id: req.params.id}, (error, tweet) => {
        if(error) return res.status(500).send(error)
        return res.status(200).json(tweet);
    })

}