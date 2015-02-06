var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var User = mongoose.model('User');


/* GET home page. */
router.get('/', function (req, res, next) {
    var user = new User(
        {
            user_name: 'Kadir',
            user_password: "123456",
            versionKey: 1

        });

    user.save(
        function (err) {
            if (err)
                throw  err;
            else
                console.log(user);
            // res.redirect('/user');
            res.json(user)

        }
    );


});


router.get('/use', function (req, res, next) {
        res.send("Selam");

    }
);
module.exports = router;
