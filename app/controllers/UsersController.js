/*const User = require('../models/User.js')*/

const User = require('../models/user.model.js');
console.log(User);


exports.store = (req, res) => {
    const user = new User({
        first_name: req.body.first_name, 
        last_name: req.body.last_name, 
        email: req.body.email, 
        password: req.body.password, 
    });
    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};