#!/bin/bash
DIR="key_store"
if [ ! -d "$DIR" ]; then
    echo "Installing config files in ${DIR}..."
    mkdir -p "$DIR"
    cd $DIR
    ssh-keygen -t rsa-sha2-512 -b 4096 -m PEM -f jwtRS512.key -N ""
else
    echo "Recreate ssh key..."
    cd $DIR
    rm jwtRS512.key
    ssh-keygen -t rsa-sha2-512 -b 4096 -m PEM -f jwtRS512.key -N ""
fi