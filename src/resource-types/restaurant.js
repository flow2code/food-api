var Sealious = require("sealious");

var places = new Sealious.ResourceType({
	name: "places",
	fields: [
		{name: "name", type: "text", required: true},
		{name: "address", type: "text", required: true},
		{name: "logo", type: "photo"}
	],
	access_strategy: {
		create: "public",
		delete: "noone",
		update: "public",
		retrieve: "public"
	}
});

module.exports = places;
