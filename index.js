var Sealious = require("sealious");

Sealious.init();

var latlong = new Sealious.FieldType({
	name: "latlong",
	is_proper_value: function(context, params, value) {
		return Promise.resolve();
	}
});

require("./src/field-types/photo.js");
require("./src/field-types/url.js");
require("./src/resource-types/places.js");

Sealious.start();
