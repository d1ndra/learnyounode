var http = require('http');

var url = process.argv[2];

var numberOfChar = 0;
var stream = "";
http.get(url, function(response)
				{
					response.setEncoding('utf8');
					response.on("data", function(data)
					{
						numberOfChar += data.length;
						stream += data;
					});
					response.on("end", function(doNothingWithThis)
					{
						console.log(numberOfChar);
						console.log(stream);
					})
					response.on("error", console.error);
				}
	);