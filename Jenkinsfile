pipeline {
     agent any
     tools {nodejs "nodejs"}
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
            }
                post {
                    failure {
                        echo 'npm install failure'
                    }
                    success {
                        echo 'npm install success'
                    }
                }
            }
        }
    }