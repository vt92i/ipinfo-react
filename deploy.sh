#!/bin/sh

DIR="`pwd`/dist"

if [ -d "$DIR" ]
then
    cd dist/
    echo -e "\e[1;32m 1. Initialiazing empty git repository and adding all files to git repository\e[0m"
    rm -rf .git && git init
    git add .

    echo -e "\e[1;32m 2. Committing local repository \e[0m"
    git commit -S -m "Initial Commit"

    git remote add origin https://gitlab.com/ipinfo/ipinfo.gitlab.io.git

    echo -e "\e[1;32m 3. Pushing to Gitlab \e[0m"
    git push --set-upstream origin main -f

    printf "\n"

    echo -e "\e[1;32m [DEPLOY SUCCESSFUL] \e[0m"
else
    echo -e "\e[1;31m [DEPLOY FAILED] /dist folder doesn't exist. \e[0m"  
fi

