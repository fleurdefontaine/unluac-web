echo "Installing dependencies"
yes | pkg update
yes | pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install jdk-17 -y

echo "Cloning repository"
git clone https://github.com/fleurdefontaine/unluac-web.git zxc

echo "NPM install"
cd zxc && npm i && node .
