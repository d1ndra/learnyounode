var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response)
	{
		var parsedUrl = url.parse(request.url, 'true')
		//console.log(parsedUrl.path)
		var inputTime = new Date(parsedUrl.query.iso)
		var out = {}

		if(request.method==='GET' && parsedUrl.pathname ==='/api/parsetime')
		{
			response.writeHead(200, {'content-type':'application/json'})
			out.hour = inputTime.getHours()
			out.minute = inputTime.getMinutes()
			out.second = inputTime.getSeconds()
			response.end(JSON.stringify(out))

		}
		else if(request.method==='GET' && parsedUrl.pathname==='/api/unixtime')
		{
			out.unixtime = inputTime.getTime()
			response.writeHead(200, {'content-type':'application/json'})
			response.end(JSON.stringify(out))
		}
		else
		{
			response.writeHead(404, {'content-type':'text/plain'})
			response.end("URL not found")
		}
	})

server.listen(process.argv[2])