#!/bin/sh
cd firefox
zip -r -FS ../gpps-firefox.zip * --exclude '*.git*'
cd ../chrome
zip -r -FS ../gpps-chrome.zip * --exclude '*.git*'
cd ..