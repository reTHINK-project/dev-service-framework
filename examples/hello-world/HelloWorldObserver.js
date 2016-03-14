/* jshint undef: true */

import Syncher from '../../src/syncher/Syncher';
import {divideURL} from '../../src/utils/utils';
import EventEmitter from '../../src/utils/EventEmitter';

/**
* Hello World Observer
* @author Paulo Chainho [paulo-g-chainho@telecom.pt]
* @version 0.1.0
*/
class HelloWorldObserver extends EventEmitter {

  /**
  * Create a new HelloWorldObserver
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */
  constructor(hypertyURL, bus, configuration) {

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super();

    let _this = this;
    _this._domain = divideURL(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/HelloWorldDataSchema';

    let domain = divideURL(hypertyURL).domain;

    let syncher = new Syncher(hypertyURL, bus, configuration);
    syncher.onNotification(function(event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
  }

  _onNotification(event) {

      let _this = this;

      // Acknowledge reporter about the Invitation was received
      event.ack();

      // Subscribe Hello World Object
      syncher.subscribe(_this._objectDescURL, event.url).then(function(dataObjectObserver) {

        // Hello World Object was subscribed
        console.info( dataObjectObserver);

        dataObjectObserver.onChange('*', function(event) {
          // Hello World Object was changed
          console.info('message received:',event);
          this.trigger('hello', event.data);

        });

      }).catch(function(reason) {
        console.error(reason);
      });


    }


  }


export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HelloWorldObserver',
    instance: new HelloWorldObserver(hypertyURL, bus, configuration)
  };

}
