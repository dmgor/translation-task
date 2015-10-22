var express=require('express');
var fs=require('fs');
var https=require('https');
var path=require('path');
var querystring=require('querystring');
var PORT=8085;
var Entities = require('html-entities').AllHtmlEntities;

var app=express();
var entities = new Entities();

var translateWithYandexApi=function(recievedText,recievedLangId,callbackFunc){
		
		var yaApiKey='trnsl.1.1.20151022T191515Z.f9305089eb694ded.8e05f1eafd464aad94c9987638ee7c4dc33565d1';
		var langDetectionLink='https://translate.yandex.net/api/v1.5/tr.json/detect?key='+yaApiKey+'&text='+recievedText;
		
		console.log("TEXT"+recievedText)
		
		function getTranslation(translationLink){
			
			 https.get(translationLink,function(resp){
			
			console.log("Translating...");
			
			resp.on('data',function(d) {
				var parsedData=JSON.parse(d);
				var result=parsedData.text;
				
				console.log(parsedData);
				
				if (parsedData.code == 200)
				{
				 callbackFunc(result[0]);
				}
				else
				{
				callbackFunc(parsedData.message);
				}	            
			});			
		
		}).on('error', function(e) { console.error(e);});
		};
		
		https.get(langDetectionLink,function(resp){
			
			console.log("Detecting language...")
			
			console.log(langDetectionLink)
			
			resp.on('data',function(d) {
				                 
				var parsedDetData=JSON.parse(d);
				
				var detectedLang=parsedDetData.lang;				

				console.log("Detected "+detectedLang);				

				var langTranslationLink='https://translate.yandex.net/api/v1.5/tr.json/translate?key='+yaApiKey+'&lang='+detectedLang+'-'+recievedLangId+'&text='+recievedText;
				console.log(langTranslationLink)
				getTranslation(langTranslationLink);
				
				});			
		
		}).on('error', function(e) { console.error(e);});

		
};


var loadstatpage = function (response,data) {
fs.readFile(path.join(__dirname,'./web/stat.html'), function (err, data) {
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
fs.readFile(path.join(__dirname,'./web/css/bootstrap.min.css'), function (err, data) {
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
	console.log(entities.decode('&#1083;&#1086;&#1083;&#1086'));
	translateWithYandexApi(entities.decode(requestObject.query.text.toString()),requestObject.query.lang,function(resp){
	res.send(resp);
	}); 
	
	
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
