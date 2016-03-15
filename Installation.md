#Installation of example of service for dummies

## Requirements:
The service example is a deployed in a node "live-server" with a lot of dependencies. Then you can connect index.html using one of the two google accounts.  
openidtest10@gmail.com / testOpenID10  
openidtest20@gmail.com / testOpenID20  
To use these accounts for authentication, one has to configure in the Google could platform the callback url of the service deployed (accessible throught Internet). URL must begin with ___msg-node.___  (e.g. msg-node.powercommunication.rethink.orange-labs.fr).   


Installation of __node.js 5.4__ or more is necessary  
Installation of jspm is necessary  

## Installation guide

To avoid a mess on the host, use a docker node container.

`docker run -d --name service-framework -it node:5.4 `  
`apt-get update `  
`npm install -g jspm `  
`mkdir /usr/src/app `  
`cd /usr/src/app `  
`jspm install service-framework=github:reTHINK-project/dev-service-framework `  
`cd /usr/src/app/jspm_packages/github/reTHINK-project/dev-service-framework@0.1.2 `  
`npm run init-setup `  
`npm install `  
`gulp encode `  --> Only one file can be encoded (what is it for?)
If you choose a Protostub configuration you have to provide the msg-node URL.  

`apt-get install vim `   
`vi system.config.json `   
--> Change the messagning node URL (don't put the prefix _msg-node._ )   
`npm install -g live-server `   
`npm start & `  
