#!/usr/bin/env bash
read -p "please input your message for git push : " message1 message2 message3 message4 message5 message6 message7
git add --all
echo $message1 $message2 $message3 $message4 $message5 $message6 $message7
git commit -m "$message1 $message2 $message3 $message4 $message5 $message6 $message7"
git push origin master