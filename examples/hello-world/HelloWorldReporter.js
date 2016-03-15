/* jshint undef: true */

import Syncher from '../../src/syncher/Syncher';
import {divideURL} from '../../src/utils/utils';
import hello from './hello';

/**
* Hyperty Connector;
* @author Paulo Chainho [paulo-g-chainho@telecom.pt]
* @version 0.1.0
*/
class HelloWorldReporter {

  /**
  * Create a new HelloWorldReporter
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */
  constructor(hypertyURL, bus, configuration) {

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');


    let _this = this;
    _this._domain = divideURL(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/HelloWorldDataSchema';

    let syncher = new Syncher(hypertyURL, bus, configuration);

    _this._syncher = syncher;


  }

  /**
  * Create HelloWorld Data Object
  * @param  {HypertyURL} HypertyURL - Invited
  */

  hello(hypertyURL) {
    let _this = this;
    let syncher = _this._syncher;

    return new Promise(function(resolve, reject) {


      syncher.create(_this._objectDescURL, [hypertyURL], hello).then(function(dataObjectReporter) {
        console.info('1. Return Create Data Object Reporter', dataObjectReporter);

      _this.dataObjectReporter = dataObjectReporter;

          dataObjectReporter.onSubscription(function(event) {
          console.info('-------- Hello World Reporter received event --------- \n');

          event.accept();
        });

        resolve(dataObjectReporter);

      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });

    });
  }

  /**
  * Update HelloWorld Data Object
  *
  */

  bye() {
    let _this = this;

    console.log('bye:', _this.dataObjectReporter );

    _this.dataObjectReporter.data.hello = "Bye!!";
  }


}



export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HelloWorldReporter',
    instance: new HelloWorldReporter(hypertyURL, bus, configuration)
  };

}
