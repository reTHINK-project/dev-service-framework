import {Syncher} from '../src/service-framework';
import HypertyConnector from '../src/hyperty/HypertyConnector';

class WorldHyperty {

  constructor(hypertyURL, bus, configuration) {

    console.log('World Hyperty Instance');

    let _this = this;
    _this.bus = bus;
    _this.configuration = configuration;
    _this.hypertyURL = hypertyURL;

    let syncher = new Syncher(hypertyURL, bus, configuration);
    _this.syncher = syncher;

    _this.syncher.onNotification(function(event) {
      console.log('hyperty World have an notification: ', event);
      _this.hypertyConnector._onNotification(event, hypertyURL);
    });

    _this.hypertyConnector = new HypertyConnector(syncher);
    _this.hypertyConnector.name = 'World Hyperty';
  }

  connect(hypertyURL, options) {
    let _this = this;
    _this.to = hypertyURL;

    return new Promise(function(resolve, reject) {

      console.info('Connecting to: ', hypertyURL);
      _this.hypertyConnector.connect(hypertyURL, options).then(function(controller) {
        console.info('Connected to: ', hypertyURL, controller);
        resolve(controller);
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  accept() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      console.info('Subscribing object');
      _this.hypertyConnector.accept().then(function(controller) {
        console.info('subscribed to: ', controller);
        resolve(controller);
      }).catch(function(reason) {
        console.error(reason);
        reject(reason);
      });
    });

  }

  disconnect() {

    let _this = this;

    return new Promise(function(resolve, reject) {

      console.info('disconnecting object');
      _this.hypertyConnector.disconnect().then(function(result) {
        console.info('disconnected');
        resolve(result);
      }).catch(function(reason) {
        console.error(reason);
        reject(reason);
      });
    });

  }

  sendMessage() {

    let _this = this;

    _this.bus.postMessage({
      from: _this.hypertyURL,
      to: 'hyperty-runtime://sp1/HelloHyperty',
      body: {
        value: 'Hello from world hyperty instance'
      }
    });

  }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    hypertyName: 'WorldHyperty',
    hypertyCode: new WorldHyperty(hypertyURL, bus, configuration)
  };

}
