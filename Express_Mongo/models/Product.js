/**
 * Created by Kadirroi on 6.2.2015.
 */

(function () {
    'use strict';

    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    module.exports = function () {
        var Product = new Schema(
            {
                product_id: String,
                product_name: String,
                product_number: String

            }, {versionKey: 'Version_Key'}
        );

        mongoose.model('Product', Product);


    };


})();
