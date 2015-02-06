var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Product = mongoose.model('Product');



/* GET users listing. */
router.get('/', function (req, res, next) {

    var product = new Product(
        {
            product_name: 'Kadir',
            product_number: "123456",
            versionKey: 1

        });
    product.save(
        function (err) {
            if (err)
                throw  err;
            else
                console.log(product);
            // res.redirect('/user');
            res.json(product);

        }
    );


});

module.exports = router;
