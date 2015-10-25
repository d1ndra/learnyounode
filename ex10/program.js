var net = require('net');
var strftime = require('strftime');
var strftimeIST = strftime.timezone('+0530');
var server = net.createServer(function (socket)
	{
		time = strftimeIST('%Y-%m-%d %H:%M');
		socket.end(time);
	}).listen(process.argv[2]);