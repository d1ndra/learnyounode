var mymodule = require('./myModule.js')

function callback(err, list)
{
	if(err) throw err;
	for (var i = 0; i < list.length; i++)
	{
		console.log(list[i]);
	}
}

mymodule(process.argv[2], process.argv[3], callback);
