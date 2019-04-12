const product = require('../model/product.model');

//simple version, without validation or sanitation 
exports.test = function(req,res) {
    res.send('Greetings from the test controller!');
};
