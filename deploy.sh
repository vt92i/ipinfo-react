#!/bin/sh

DIR="`pwd`/dist"

if [ -d "$DIR" ]
then
    cd dist/
    echo -e "\e[1;32m 1. Initialiazing empty git repository and adding all files to git repository\e[0m"
    git init
    git add .

    echo -e "\e[1;32m 2. Committing local repository \e[0m"
    git commit -S -m "Github Deploy"

    git remote add origin https://github.com/vt92i/ipinfo.git

    echo -e "\e[1;32m 3. Pushing to Github \e[0m"
    git push -f origin main:gh-pages

    printf "\n"

    echo -e "\e[1;32m [DEPLOY SUCCESSFUL] \e[0m"
else
    echo -e "\e[1;31m [DEPLOY FAILED] /dist folder doesn't exist. \e[0m"  
fi

