
const router = require('express').Router();

const { getAll, getUserByUsername, create, deleteByUsername, updateUserEmail} = require('./users.controller.js');


router.get('/', getAll);
router.get('/:username', getUserByUsername);
router.post('/', create);
router.delete('/:username', deleteByUsername);
router.patch('/:username', updateUserEmail);


module.exports = router;

