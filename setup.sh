echo "Installing dependencies"

echo "Cloning repository"
git clone https://github.com/fleurdefontaine/unluac-web.git zxc

echo "NPM install"
cd && cd zxc
npm i && node .
