pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }


    environment {
        gitName = 'seungsura'
        gitEmail = 'seungsura@gmail.com'
        gitWebaddress = 'https://github.com/seungsura/JobPosting.git'
        gitSshaddress = 'git@github.com:seungsura/JobPosting.git'
        gitCredential = 'ssh_cre'
        dockerHubRegistry = 'harbor.ks.io/test'
        dockerHubRegistryCredential = 'docker_cre'
    }

    stages {

        stage('checkout Github') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: gitCredential, url: gitWebaddress]]])
                }
                post {
                    failure {
                        echo 'Repository clone failure'
                    }
                    success {
                        echo 'Repository clone success'
                    }
            }
        }    

        stage('Build') {
            steps {
		sh "sudo npm cache verify"
		sh "npm start --prefix '/JobPosting/frontend/'"
		sh "sudo npm install -g npm"
                sh "sudo npm run build"
            }
            post {
                failure {
                    echo 'npm build failure'
                }
                success {
                    echo 'npm build success'
                    }
                }
        }

    }
}

