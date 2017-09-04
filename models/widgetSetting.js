var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var schema = new Schema({
    createdDate: {type: Date, default: Date.now},
    widgetId: String,
    rollMin: {type: Number, default: -90},
    rollMax: {type: Number, default: 90},
    pitchMin: {type: Number, default: -90},
    pitchMax: {type: Number, default: 90},
    isDegrees: {type: Boolean, default: true}
});

module.exports = mongoose.model('WidgetSetting', schema);