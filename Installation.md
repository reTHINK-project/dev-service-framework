#Installation of Hyperties

You should execute the Following commands in the machine where you have the Reverse-Proxy (assuming you are following [reTHINK testbed guidelines](https://github.com/reTHINK-project/testbeds/blob/master/docs/platformInstallationGuide.md)).

## Requirements:

* At least node.js 5.4
* JSPM

## Installation

*In future this won't be required*

Execute:

```shell
jspm install
```

and

```shell
npm install
```

## configuration

Set your domain name at `system.config.json` e.g.:

```
{
  "domain" : "hybroker.rethink.ptinovacao.pt"
}
```

Provision your App Redirect-URI into the IDPs you want to support. At this point, only Google is Supported and the following [Google Dev account](https://console.developers.google.com/apis/credentials?project=my-openid-project-1138) should be used:

openidtest10@gmail.com / testOpenID10  

For "hybroker" domain, the redirect uRI for examples (including Hello World), should be:

`https://hybroker.rethink.ptinovacao.pt/examples/`

## Launch the App and Catalogue Server

Start the Local Catalogue server and Web Application Server:

`npm start`

In case you have problems starting the HTTPS server pls ensure there is no other service using HTTPS port 443. If the problem persists, execute:

`http-server --cors -S -p 443 -C rethink-certificate.cert -K rethink-certificate.key`

You can test the App opening the Browser at:

`https://<your-domain.com>/examples/`

*I think the procedures below are outdated. Pls check*

The service example is a deployed in a node "live-server" with a lot of dependencies. Then you can connect index.html using one of the two google accounts.  
openidtest10@gmail.com / testOpenID10  
openidtest20@gmail.com / testOpenID20  
To use these accounts for authentication, one has to configure in the Google could platform the callback url of the service deployed (accessible throught Internet). URL must begin with ___msg-node.___  (e.g. msg-node.powercommunication.rethink.orange-labs.fr).   


Installation of __node.js 5.4__ or more is necessary  
Installation of jspm is necessary  

## Installation guide

To avoid a mess on the host, use a docker node container.

```
docker run -d --name service-framework -it node:5.4 `  
apt-get update   
npm install -g jspm   
mkdir /usr/src/app   
cd /usr/src/app   
jspm install service-framework=github:reTHINK-project/dev-service-framework   
cd /usr/src/app/jspm_packages/github/reTHINK-project/dev-service-framework@0.1.2   
npm run init-setup  
npm install   
gulp encode  
```
--> Only one file can be encoded (what is it for?)
If you choose a Protostub configuration you have to provide the msg-node URL.  

```
apt-get install vim    
vi system.config.json  
```
--> Change the messagning node URL (don't put the prefix _msg-node._ )   
```
npm install -g live-server    
npm start &   
```
