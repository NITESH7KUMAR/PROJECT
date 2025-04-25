pipeline {
  agent any

  environment {
    IMAGE_NAME = 'kumar7nitesh/project-php'
    DOCKER_COMPOSE_DIR = 'php' // Change this if your docker-compose.yml is elsewhere
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
            sh "docker build -t ${IMAGE_NAME} ."
          }
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            sh "echo \"$DOCKER_PASS\" | docker login -u \"$DOCKER_USER\" --password-stdin"
            sh "docker push ${IMAGE_NAME}"
          }
        }
      }
    }

    stage('Deploy using Docker Compose') {
      steps {
        dir("${DOCKER_COMPOSE_DIR}") {
          script {
            sh 'docker-compose down || true'
            sh 'docker-compose up -d'
          }
        }
      }
    }
  }
}
