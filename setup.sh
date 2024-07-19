echo "Installing dependencies"
yes | pkg update
yes | pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install jdk-17 -y

echo "Cloning repository"
git clone https://github.com/fleurdefontaine/unluac-web.git

echo "NPM install"
cd unluac-web && npm i && node .
