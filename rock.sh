#!/usr/bin/env bash

function setup-redis {
    echo ''
    echo '··························'
    echo '·· starting up redis    ··'
    echo '··························'
    echo ''  
    # TBD
    cd ./docker-redis
    sh ./create-image.sh
    sh ./start-service.sh
    cd ..  
}

function setup-service {
    echo ''    
    echo '··························'
    echo '·· starting up services ··'
    echo '··························'
    echo ''
    # TBD
    cd ./butchery-service
    sh ./create-image.sh
    sh ./start-service.sh
    cd ..
}

function main {
    setup-redis
    setup-service
    echo ''
    echo '···················'
    echo '· setup completed ·'
    echo '··················' 
    echo ''   
}

main