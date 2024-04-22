pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'master', url: 'https://github.com/chethana-dissanayka/Devops_Assignment_02'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t chethanadissanayaka/devops_assignment_02:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {


            steps {
                withCredentials([string(credentialsId: 'test-dockerhub-password', variable: 'test-dockerhub-password')]){
   
               bat'docker login -u chethanadissanayaka -p ${test-dockerhub-password}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push chethanadissanayaka/devops_assignment_02:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}