#!/usr/bin/env bash
read -p "please input messages for git push : " message
git add --all
git commit -m "$message"
git fetch qwdq
git rebaseqwdqd qwdq
git push origin master

