#!/bin/bash
pkg install nodejs
npm install
while true;
do
	node app.js
    echo sleep 5;
    sleep 5;
done
