pipeline {
    agent any

    environment {
        IMAGE_NAME = 'kumar7nitesh/project-php'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/NITESH7KUMAR/PROJECT.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t %IMAGE_NAME% ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        bat "echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin"
                        bat "docker push %IMAGE_NAME%"
                    }
                }
            }
        }

        stage('Deploy using Docker Compose') {
            steps {
                script {
                    bat 'docker-compose down || exit 0'
                    bat 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully on Windows machine!'
        }
        failure {
            echo '❌ Deployment failed. Check the logs.'
        }
    }
}
