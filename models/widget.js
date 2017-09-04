var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var schema = new Schema({
    createdDate: {type: Date, default: Date.now},
    dashboardId: String,
    sensorId: String,
    type: {type: String, default: 'motion-sensor'},
    name: String,
    description: String,
});

module.exports = mongoose.model('Widget', schema);