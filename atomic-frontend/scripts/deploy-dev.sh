#!/bin/bash
ssh root@89.104.68.170 "rm -rf /var/www/atomic-tech.ru/"
rsync -avz ~/Developer/Atomic-FrontEnd/atomic-frontend/ root@85.193.82.242:/var/www/atomic-tech.ru/