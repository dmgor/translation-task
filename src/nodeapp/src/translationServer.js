var express=require('express');
var fs=require('fs');
var https=require('https')
var PORT=8080;

var app=express();

var translateWithGoogleScript=function(recievedText,recievedLangId,callbackFunc){
		
				
		var gsLink="https://script.google.com/macros/s/AKfycbx7gnyltxcLM1so_8z8H9eZIG4FSp3SQ32aq37yQVc275DRLlJB/exec?"+"text="+recievedText+"&lang="+recievedLangId;
			
			console.log(gsLink);
		
		https.get(gsLink,function(resp){
		
			console.log(resp)
		
			resp.on('data',function(d) {
				callbackFunc(d);
				});			
		
		}).on('error', function(e) { console.error(e);});
		
};


var loadstatpage = function (response,data) {
fs.readFile('./web/stat.html', function (err, data) {
    if (err) {
        throw err; 
    }
console.log("handler 'statpage' was called.");
response.writeHead(200, {"Content-Type": "text/html"});
response.write(data);
response.end();
});
}

var loadbootsrap=function(response,data) {
fs.readFile('./web/css/bootstrap.min.css', function (err, data) {
    if (err) {
        throw err; 
    }
console.log("handler 'loadbootsrap' was called.");
response.writeHeader(200, {"Content-Type": "text/css"});
response.write(data);
response.end();
});
}


app.get('/', function (req, res) {
  res.send('Welcome\n');
});

app.get('/css/bootstrap.min.css', function (req, res) {
  loadbootsrap(res);
});

app.get('/app',function (req, res) {
	loadstatpage(res);
});

app.get('/translate',function (req, res) {
  	
	var requestObject=req;
	
	translateWithGoogleScript(requestObject.query.text.toString(),requestObject.query.lang.toString(),function(resp){
	res.send(resp);
	}); 
	
	
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
