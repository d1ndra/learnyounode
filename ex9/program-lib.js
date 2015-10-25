var http = require('http')
var bl = require('bl');
var after = require('after');

var urls = process.argv.slice(2);
var stream = [];
var next = after(3, displayRes);

function displayRes()
{
	for (var i = 0; i < urls.length; i++) 
	{
		console.log(stream[i]);
	};
}

function caller(i)
{
	http.get(urls[i], function(response)
			{
				response.pipe(bl(function(err,data)
				{
					if(err) return console.error(err);
					stream[i] = data.toString();
					next();
				}));
			});
}

for (var i = 0; i < urls.length; i++) 
{
	caller(i);
};