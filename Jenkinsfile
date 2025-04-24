pipeline {
  agent any

  environment {
    IMAGE_NAME = 'kumar7nitesh/blood-donation-backend'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/NITESH7KUMAR/PROJECT.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        dir('php') {
          sh 'docker build -t $IMAGE_NAME .'
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
          sh 'docker push $IMAGE_NAME'
        }
      }
    }

    stage('Deploy using Docker Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d'
      }
    }
  }
}
