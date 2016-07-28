var Sealious = require("sealious");
var validUrl = require("valid-url");

var url = new Sealious.FieldType({
	name: "url",
	extends: "text",
	is_proper_value: function(accept, reject, context, params, value){
		if(validUrl.isUri(value)){
			accept();
		}else{
			reject("Not a valid URL: '" + value.toString() + "'");
		}
	}
});

module.exports = url;
