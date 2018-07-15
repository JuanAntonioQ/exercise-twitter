
const router = require('express').Router();
const { getTweets,  getTweetById, createTweetByUser, deleteTweetById } = require('./tweets.controller');

router.get('/', getTweets);
router.get('/:id', getTweetById);
router.post('/:username', createTweetByUser);
router.delete('/:id', deleteTweetById);

module.exports = router;