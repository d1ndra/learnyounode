var fs = require("fs");
	
function endsWith(str, suffix)
{
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var buf = fs.readdir(process.argv[2], function callback (err, list)
			{
				if(err) throw err;
				var ext = "."+process.argv[3];
				for (var i = 0; i < list.length; i++)
				{
					if(endsWith(list[i], ext))
					{
						console.log(list[i]);
					}
				}
			});