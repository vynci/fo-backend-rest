var SensorLog = require('../models/sensorLog.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	var model = new SensorLog({
		sensorId : req.body.sensorId || '0',
		roll : req.body.roll || 0,
		pitch : req.body.pitch || 0,
        heading : req.body.heading || 0
	});

	model.save(function (err, result) {
		if (err){
			return res.json(err);
		}

		else {
			obj.data = result;
			return res.json(obj);
		}
	});
}

exports.get = function(req, res) {
	SensorLog.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}

exports.update = (function(req, res) {
	var body = req.body;

	SensorLog.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	SensorLog.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send('item successfully deleted');
	});
});