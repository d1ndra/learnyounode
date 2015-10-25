var http = require('http')
var bl = require('bl');
var urls = process.argv.slice(2);

var stream = [];

function displayRes()
{
	for (var i = 0; i < urls.length; i++) 
	{
		console.log(stream[urls[i]]);
	};
}

function caller(url)
{
	http.get(url, function(response)
			{
				response.pipe(bl(function(err,data)
				{
					if(err) console.error(err);
					stream[url] = data.toString();
					/*if(Object.keys(stream).length === urls.length)
					{
						displayRes();
					}*/
				}));
			});
}

for (var i = 0; i < urls.length; i++) 
{
	caller(urls[i]);
};

while(true)
{
	console.log(Object.keys(stream).length);
	if(Object.keys(stream).length === urls.length)
	{
		console.log("hi");
		displayRes();
		break;
	}
}
/*
while(true)
{
	
}

var http = require('http');
var bl = require('bl');

var listUrls = process.argv.slice(2);
var resultData = [];

function displayResult() {
    listUrls.forEach(function(url) {
        console.log(resultData[url]);
    });
}

function doRequest(url) {
    http.get(url, function(result) {
        result.pipe(bl(function (err, data) {
            if (err) return console.error(err);
            resultData[url] = data.toString();
            if (Object.keys(resultData).length === listUrls.length) {
                displayResult();
            }
        }))
    });
}

for (var i = 0; i < listUrls.length; i++) {
    doRequest(listUrls[i]);
}*/