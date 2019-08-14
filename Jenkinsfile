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
            sh 'echo npm test ./src/nodeapp'
          }
        }
        stage('npm test-2') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh 'echo npm test ./src/nodeapp'
          }
        }
        stage('npm test-3') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh 'echo npm test ./src/nodeapp'
          }
        }
      }
    }
    stage('Docker build') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        dir(path: './src/nodeapp') {
          sh 'docker build .'
        }

      }
    }
    stage('Publish artifacts') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        archiveArtifacts(artifacts: '*.js', fingerprint: true, onlyIfSuccessful: true)
      }
    }
  }
}