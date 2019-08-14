pipeline {
  agent none
  stages {
    stage('Prepare') {
      parallel {
        stage('get scripts') {
          agent {
            docker {
              image 'alpine'
            }

          }
          steps {
            sh '''echo "Getting latest scripts...." ;
sleep 10;
echo "Done"'''
          }
        }
        stage('Do something in parallel') {
          agent {
            docker {
              image 'alpine'
            }

          }
          steps {
            sh '''echo "Doing more things in parallel"
sleep 15;
echo "Done"'''
          }
        }
      }
    }
    stage('Build Node') {
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        sh 'echo "Setup comes here"'
        sh 'npm build ./src/nodeapp'
      }
    }
  }
}