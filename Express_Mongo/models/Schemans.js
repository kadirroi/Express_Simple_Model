(function () {

    'use strict';

    var all_models;

    all_models = function () {
        var exprt_model, i, path_file, files_model = ['User.js', 'Product.js'];

        for (i = 0; i < files_model.length; i++) {

            path_file = "./" + files_model[i];
            exprt_model = require(path_file);
            exprt_model();


        }


    };

    module.exports = all_models;

})();










