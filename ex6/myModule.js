module.exports = pathReader;
var fs = require("fs")
var path = require("path")


function pathReader (dirPath, ext, callback)
{
	fs.readdir(dirPath, function(err, data)
		{
			if(err)
				return callback(err);
			var result = [];
			for (var i = 0; i < data.length; i++)
			{
				if(path.extname(data[i])=== '.'+ext)
				{
					result.push(data[i]);
				}
			}
			return callback(null, result);
		});
}