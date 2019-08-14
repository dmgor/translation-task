pipeline {
  agent none
  stages {
    stage('get scripts') {
      parallel {
        stage('get scripts') {
          agent any
          steps {
            sh 'curl https://repo.dev.wixpress.com/artifactory/generic/scripts/getLastScripts.sh | sh'
          }
        }
        stage('Do something in parallel') {
          steps {
            echo 'I am a message'
            sh '''sleep 15;
echo "Done"'''
          }
        }
      }
    }
    stage('Build Node') {
      agent any
      steps {
        sh 'echo "Setup comes here"'
        sh 'npm build ./src/nodeapp'
      }
    }
  }
}