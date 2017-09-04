var Widget = require('../models/widget.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	var model = new Widget({
		dashboardId : req.body.dashboardId || '',
		sensorId : req.body.sensorId || '',
		type : req.body.type || '',
        name : req.body.name || '',
		description : req.body.description || '',
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
	Widget.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}


exports.update = (function(req, res) {
	var body = req.body;

	Widget.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	Widget.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send('item successfully deleted');
	});
});