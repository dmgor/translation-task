FROM    ubuntu
RUN     apt-get update && apt-get install -y nodejs && apt-get install -y npm
COPY . /translationapp
RUN cd /translationapp; npm install
EXPOSE  8080
CMD ["nodejs", "/translationapp/src/translationServer.js"]