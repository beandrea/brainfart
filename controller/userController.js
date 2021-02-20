const db = require("../models/user");

module.exports = {
    createUser: function(req, res) {
        //user firebase method to create user
      
        // if succesful us route to create method
        db.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    getUser: function(req, res) {
        db.findOne({ firebaseId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    createResult: function(req, res) {
        db.findOneAndUpdate({ firebaseId: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};