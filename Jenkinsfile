pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
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
        stage('Check published version') {
          agent {
            docker {
              image 'alpine'
            }

          }
          steps {
            sh '''echo "Checking for already published artifacts"
sleep 15;
echo "Done"'''
          }
        }
      }
    }
    stage('Build Node') {
      parallel {
        stage('Build Node') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh '''pwd ;
ls -la ;'''
            sh 'npm build ./src/nodeapp'
          }
        }
        stage('npm test-1') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh 'npm test ./src/nodeapp'
          }
        }
        stage('npm test-2') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh 'npm test ./src/nodeapp'
          }
        }
        stage('npm test-3') {
          steps {
            sh 'npm test ./src/nodeapp'
          }
        }
      }
    }
    stage('Docker build') {
      steps {
        sh 'docker build .'
      }
    }
  }
}