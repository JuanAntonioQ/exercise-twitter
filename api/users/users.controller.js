const users = require('./users.model');

module.exports.getAll = getAll;
module.exports.getUserByUsername = getUserByUsername;
module.exports.create = create;
module.exports.deleteByUsername = deleteByUsername;
module.exports.updateUserEmail = updateUserEmail;


function getAll(req, res) {
    users.find({}, (err, result) => {
        if(err) return res.status(500).send(err);
        return res.json(result);
    })
}

function getUserByUsername(req, res){
    users.find({"username": req.params.username}, (err, user) => {
        if(err) return res.status(500).send(err);
        return res.json(user);
    });
}

function create(req, res) {
    users.find({"username": req.body.username}, function(error, user) {

        if(user.length){
            res.status(400).send('username repetido');
        } else {
            const user =  users({
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                tweets : []
            })
            user.save(function (err) {
                if(err) return res.send(err.message);
                return res.status(201).json(user);
            });
        }
    });

}

function deleteByUsername(req, res) {
    users.findOneAndRemove({"username" : req.params.username}, (err, user) => {
        if(err) return res.status(500).send(err);
        return res.status(200).json(user);
    })

}

function updateUserEmail(req, res){
    users.findOneAndUpdate({"username" : req.params.username}, {"$set": {"email": req.body.email}}, {new:true}, (err, user) => {
        if(err) return res.status(500).send(err);
        res.status(200).json(user);
    });
}

