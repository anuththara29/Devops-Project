pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_REGISTRY = 'docker.io'
        APP_SERVER = '123.45.67.89'
        SSH_CREDENTIALS_ID = 'my-ssh-credentials-id'
        DOCKER_CREDENTIALS_ID = 'my-docker-registry-credentials-id' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                git 'https://github.com/anuththara29/Devops-Project'
            }
        }

        stage('Build Docker Images') {
            steps {
                // Build Docker images for frontend and backend
                script {
                    docker.build("${DOCKER_REGISTRY}/mern-backend", "./backend")
                    docker.build("${DOCKER_REGISTRY}/mern-frontend", "./web-app")
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                // Push Docker images to registry
                script {
                    docker.withRegistry('', "${DOCKER_CREDENTIALS_ID}") {  // Use credentials ID here
                        docker.image("${DOCKER_REGISTRY}/mern-backend").push('latest')
                        docker.image("${DOCKER_REGISTRY}/mern-frontend").push('latest')
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                // Deploy application to remote server
                sshagent(credentials: ["${SSH_CREDENTIALS_ID}"]) {
                    sh """
                    ssh -o StrictHostKeyChecking=no user@${APP_SERVER} << EOF
                    docker pull ${DOCKER_REGISTRY}/mern-backend:latest
                    docker pull ${DOCKER_REGISTRY}/mern-frontend:latest
                    cd /path-to-your-app-directory
                    docker-compose down
                    docker-compose up -d
                    EOF
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean up
            cleanWs()
        }
    }
}
