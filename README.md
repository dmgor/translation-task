# translation-task
###Google script aplication api is available by following link:
**[CLICK](https://script.google.com/macros/s/AKfycbx7gnyltxcLM1so_8z8H9eZIG4FSp3SQ32aq37yQVc275DRLlJB/exec?text=hello&lang=de)**
#####"text" parameter is for text and "lang" parameter is for language code
#####Sources can be found [here](https://github.com/dmgor/translation-task/tree/master/src/googlescript)

###Standalone web application is available [here](https://github.com/dmgor/translation-task/tree/master/src/nodeapp)
#####Deployment procedure uses [docker](https://www.docker.com/) , so it should be installed on the PC where deployment is going to be performed.This is unix-only installation, so bash should be available to.
#####To perform deployment and start application just clone repo to your environment and run deployAndStart.bsh script.Please note that root permissions are required to run docker.
#####Application will be available on http://localhost:8085/app
#####API will be available on http://localhost:8085/translate?text=example&lang=fr
