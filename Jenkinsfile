pipeline {
  agent any

  environment {
    IMAGE_NAME = 'kumar7nitesh/project-php'
    DOCKER_COMPOSE_DIR = 'php'  // Change this if your docker-compose.yml is elsewhere
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/NITESH7KUMAR/PROJECT.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        dir('php') {
          script {
            bat "docker build -t ${IMAGE_NAME} ."
          }
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            bat "echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin"
            bat "docker push ${IMAGE_NAME}"
          }
        }
      }
    }

    stage('Deploy using Docker Compose') {
      steps {
        dir("${DOCKER_COMPOSE_DIR}") {
          script {
            bat 'docker-compose down || true'
            bat 'docker-compose up -d'
          }
        }
      }
    }
  }
}
