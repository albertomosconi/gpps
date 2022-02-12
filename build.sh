#!/bin/sh

CHROME_ZIP="gpps-chrome.zip"
FIREFOX_ZIP="gpps-firefox.zip"

[ -f "$CHROME_ZIP" ] && rm "$CHROME_ZIP";
[ -f "$FIREFOX_ZIP" ] && rm "$FIREFOX_ZIP";

cd common
zip -r -FS "../$CHROME_ZIP" *
zip -r -FS "../$FIREFOX_ZIP" *
cd ../chrome
zip -rv "../$CHROME_ZIP" *
cd ../firefox
zip -rv "../$FIREFOX_ZIP" *