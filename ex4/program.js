var fs = require("fs");
	
var buf =  fs.readFile(process.argv[2], function(err, data){
		if(err) throw err;
		var s = data.toString();
		var num = s.split('\n').length - 1;
		console.log(num);
	});
