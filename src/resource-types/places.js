var Sealious = require("sealious");

var places = new Sealious.ResourceType({
	name: "places",
	fields: [
		{name: "name", type: "text", required: true},
		{name: "address", type: "text", required: true},
		{name: "location", type: "latlong"},
		{name: "logo", type: "photo"},
		{name: "website", type: "url"}
	],
	access_strategy: {
		create: "public",
		delete: "noone",
		update: "public",
		retrieve: "public"
	}
});

module.exports = places;
