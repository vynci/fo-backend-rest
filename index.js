var express = require('express')
, mongoose = require('mongoose')
, app = module.exports = express()
, cors = require('cors')
, bodyParser = require('body-parser')
, methodOverride = require('method-override')

, env = process.env.NODE_ENV || 'development'
, config = require('./config')[env]

var port = Number(process.env.PORT || 3000);

// connect to Mongo when the app initializes
console.log(config.db);
mongoose.connect(config.db);

mongoose.connection.on('connected', function(){
    console.log('connected')
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(cors());

// var userAPI = require('./controllers/user.js');
var widgetAPI = require('./controllers/widget.js');
var widgetSettingAPI = require('./controllers/widgetSetting.js');
var sensorLogAPI = require('./controllers/sensorLog.js');

// app.post('/v1/api/user', userAPI.create);
// app.get('/v1/api/user', userAPI.get);

app.post('/v1/api/widget', widgetAPI.create);
app.get('/v1/api/widget/', widgetAPI.get);
app.put('/v1/api/widget/:id', widgetAPI.update);
app.delete('/v1/api/widget/:id', widgetAPI.deleteItem);

app.post('/v1/api/widget-setting', widgetSettingAPI.create);
app.get('/v1/api/widget-setting/', widgetSettingAPI.get);
app.get('/v1/api/widget-setting/:id', widgetSettingAPI.getByWidgetId);
app.put('/v1/api/widget-setting/:id', widgetSettingAPI.update);
app.delete('/v1/api/widget-setting/:id', widgetSettingAPI.deleteItem);

app.post('/v1/api/sensor-log', sensorLogAPI.create);
app.get('/v1/api/sensor-log/', sensorLogAPI.get);
app.get('/v1/api/sensor-log-count/', sensorLogAPI.count);
app.put('/v1/api/sensor-log/:id', sensorLogAPI.update);
app.delete('/v1/api/sensor-log/:id', sensorLogAPI.deleteItem);

var server = app.listen(port, function() {
	console.log("Express server listening on port %d", server.address().port);
});