var WidgetSetting = require('../models/widgetSetting.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	var model = new WidgetSetting({
		widgetId : req.body.widgetId || '0',
		rollMin : req.body.rollMin || -90,
		rollMax : req.body.rollMax || 90,
        pitchMin : req.body.pitchMin || -90,
		pitchMax : req.body.pitchMax || 90,
		isDegrees : req.body.isDegrees || true
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
	WidgetSetting.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}

exports.getByWidgetId = function(req, res) {
	WidgetSetting.findOne({widgetId: req.params.id}, function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}


exports.update = (function(req, res) {
	var body = req.body;

	WidgetSetting.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	WidgetSetting.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send('item successfully deleted');
	});
});