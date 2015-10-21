var express=require('express');

var PORT=8080;

var app=express();

var router=express.Router();


var translationObject=function(text, lang){
	
	
	var sendTranslationRequest=function()
		{
			
		}
	
	
	var translateWithGoogleScript=function(recievedText,recievedLangId){
		
				
		var gsLink="https://script.google.com/macros/s/AKfycbx7gnyltxcLM1so_8z8H9eZIG4FSp3SQ32aq37yQVc275DRLlJB/exec?" \
		\+"text="+recievedText"+&lang="recievedLangId;		
		
	};
	

	
	
	this.recievedText=text;
	this.recievedLangId=lang;
		
	this.getGsTranslation=translateWithGoogleScript(this.recievedText,this.recievedLangId);
	
	//this.getSecretLinkTranslation=translateWithSecretLink(this.recievedText,this.recievedLangId);
};



router.get('/', function (req, res) {
  res.send('Welcome\n');
});

//router.get('/translate', function (req, res) {
  //var  
//});


app.use('/translate', router);



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);