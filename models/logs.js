var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: String,
    order_details: String,
    time: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Logs', schema);