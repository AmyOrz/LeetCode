#!/usr/bin/env bash
read -p "please input 8 messages for git push : " message0 message1 message2 message3 message4 message5 message6 message7
git add --all
git commit -m "$message0 $message1 $message2 $message3 $message4 $message5 $message6 $message7"
git push origin master