pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout code from your Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the tests
                bat 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
