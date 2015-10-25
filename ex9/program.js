var http = require('http')
var bl = require('bl');
var urls = process.argv.slice(2);
var stream = [];
var count = 0;

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
					count++;
					if(count === 3)
					{
						displayRes();
					}
				}));
			});
}

for (var i = 0; i < urls.length; i++) 
{
	caller(i);
};