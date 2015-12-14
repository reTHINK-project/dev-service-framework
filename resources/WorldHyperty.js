import {Syncher} from '../src/service-framework';
import HypertyConnector from '../src/hyperty/HypertyConnector';

class WorldHyperty {

  constructor(hypertyURL, bus, configuration) {

    console.log('World Hyperty Instance');

    let _this = this;
    _this.bus = bus;
    _this.configuration = configuration;
    _this.hypertyURL = hypertyURL;

    _this.mode = 'owner';

    let syncher = new Syncher(hypertyURL, bus, configuration);
    _this.syncher = syncher;

    _this.syncher.onNotification(function(event) {
      console.log('hyperty World have an notification: ', event);
      _this.hypertyConnector._onNotification(event, hypertyURL);
    });

    _this.hypertyConnector = new HypertyConnector(syncher);
    _this.hypertyConnector.name = 'World Hyperty';
  }

  connectTo(hypertyURL, options) {
    let _this = this;
    _this.to = hypertyURL;

    console.info('Connecting to: ', hypertyURL);
    _this.hypertyConnector.connect(hypertyURL, options).then(function(controller) {
      console.info('connected to: ', hypertyURL, controller);
    }).catch(function(reason) {
      console.error(reason);
    });
  }

  accept() {
    let _this = this;
    _this.mode = 'guest';

    let reporters = _this.syncher.reporters;
    let observers = _this.syncher.observers;
    let options = {};

    _this.hypertyConnector.accept(options).then(function(controller) {
      console.info('subscribed to: ', controller);
    }).catch(function(reason) {
      console.error(reason);
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
