const db = require("../models/user");

module.exports = {
    getUser: (req, res) => {
        db.User.find(req.params.id).then(dbModel => res.JSON(dbModel)).catch(err => console.log(err));
    }
};