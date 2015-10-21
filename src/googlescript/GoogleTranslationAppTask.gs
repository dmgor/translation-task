function googleTranslateThis(params) { 
  var srcLanguage=''; //it is set to empty to perform auto-detection of text source code
  var sourceText=params.parameter.text;  
  var translationLang=params.parameter.lang;
  
  try 
  {
    var translatedText = LanguageApp.translate(sourceText,srcLanguage,translationLang);
  }
  catch(error) 
  {
    var translatedText ="Not all parameters are defined, or incorrect language code used.Format is text=YOURTEXT&lang=TRANSLATIONLANGUAGE."+"Error is:  "+error;
  }
   
  return translatedText;
}

function doGet(e) {
  
 var paramstring=JSON.stringify(e); 
 var params=JSON.parse(paramstring);
 
 var translationResult=googleTranslateThis(params);
 
  return HtmlService.createHtmlOutput(translationResult);
  
}