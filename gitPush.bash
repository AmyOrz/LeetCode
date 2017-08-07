#!/usr/bin/env bash
read -p "please input messages for git push : " message
git add --all
git commit -m "$message"
git fetch
git rebase
git push origin master

