#!/bin/bash
ssh root@89.104.68.170 "rm -rf /var/www/html"
rsync -e "ssh -p 22" -a ./build/ root@89.104.68.170:/var/www/html/