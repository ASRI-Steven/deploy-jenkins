pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                script {
                    // Memuat SCM Git
                    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '57e51de8-7d87-424d-8cf7-13ef5bdffaa1', url: 'https://github.com/ASRI-Steven/deploy-jenkins.git']])
                }
            }
        }
        stage('Remote SSH') {
            steps {
                script {
                    sh "cd /home/deploy-jenkins"
                    sh "docker build -t asriapps/nodebaru:latest ."
                    sh 'echo 654321BbB | docker login -u ict.apps@alamsutera.co.id --password-stdin'
                    sh "docker push asriapps/nodebaru:latest"
                    sh "docker pull asriapps/nodebaru:latest"
                    sh "docker container stop wkwk"
                    sh "docker container rm wkwk"
                    sh "docker run -dp 3000:3000 --name wkwk asriapps/nodebaru"
                }
            }
        }
    }
}
