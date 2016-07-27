var Sealious = require("sealious");

Sealious.init();

var latlong = new Sealious.FieldType({
	name: "latlong",
	is_proper_value: function(context, params, value){
		//logic;
		return Promise.resolve();
	}
});

var restaurant = new Sealious.ResourceType({
	name: "restaurants",
	fields: [
		{name: "name", type: "text", required: true},
		{name: "address", type: "text", required: true},
		{name: "location", type: "latlong", required: true}
	],
	access_strategy: {
		create: "public",
		delete: "noone",
		update: "public",
		retrieve: "public"
	}
});

Sealious.start();
