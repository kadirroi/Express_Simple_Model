/**
 * Created by Kadirroi on 6.2.2015.
 */


(function () {
    'use strict';
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    module.exports = function () {
        var User = new Schema(
            {
                user_id: String,
                user_name: String,
                user_password: String

            }, {versionKey: 'Version_Key'}
        );

        mongoose.model('User', User);


    };


})();
