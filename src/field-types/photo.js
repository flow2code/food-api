var Sealious = require("sealious");

var photo = new Sealious.FieldType({
	name: "photo",
	extends: "file",
	is_proper_value: function(accept, reject, context, params, value){
		var file_field_type = new Sealious.FieldType("file");
		return file_field_type.is_proper_value(context, params, value)
		.then(function(){
			if(value.mime.indexOf("image/" == 0)){
				accept();
			}else{
				reject("Wrong mime type!");
			}
		});
	}
});


module.exports = photo;
