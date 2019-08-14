pipeline {
  agent none
  stages {
    stage('get scripts') {
      parallel {
        stage('get scripts') {
          steps {
            sh 'curl https://repo.dev.wixpress.com/artifactory/generic/scripts/getLastScripts.sh | sh'
          }
        }
        stage('Do something in docker') {
          steps {
            echo 'I am a message'
          }
        }
      }
    }
    stage('Build Node') {
      agent {
        node {
          label 'latest'
        }

      }
      steps {
        sh 'echo "Setup comes here"'
        sh 'npm build ./src/nodeapp'
      }
    }
  }
}
