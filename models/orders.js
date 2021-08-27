var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    user : String,
    order_details: String
});

module.exports = mongoose.model('Orders', orderSchema);