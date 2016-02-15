import HypertyDiscovery from '../hyperty-discovery/HypertyDiscovery';
import communication from './communication';
import {divideURL} from '../utils/utils';
import Syncher from '../syncher/Syncher';
import ChatGroup from './Chat';

/**
* Hyperty Chat;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/
class HypertyChat {

  constructor(hypertyURL, bus, configuration) {
    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    // super(hypertyURL, bus, configuration);

    let _this = this;
    let syncher = new Syncher(hypertyURL, bus, configuration);

    let domain = divideURL(hypertyURL).domain;
    let hypertyDiscovery = new HypertyDiscovery(domain, bus);

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

  }

  /**
   * This function is used to create a new Group Chat providing the identifier of the Group to be notified.
   * @param  {String} name             chat name
   * @param  {URL.UserURL} UserURLList List of User allowed
   * @return {Promise}
   */
  create(name) {

    let _this = this;
    let syncher = _this._syncher;
    let hypertyDiscovery = _this._hypertyDiscovery;

    return new Promise(function(resolve, reject) {

      console.info('------------------------ Syncher Create ---------------------- \n');
      syncher.create(_this._objectDescURL, [], {communication: communication})
      .then(function(dataObjectReporter) {
        console.info('3. Return Create Data Object Reporter', dataObjectReporter);

        let chat = new ChatGroup(syncher, hypertyDiscovery);
        chat.dataObjectReporter = dataObjectReporter;

        resolve(chat);
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  _mappingUser(userList) {

    let _this = this;

    return new Promise(function(resolve, reject) {
      let promiseList = [];

      userList.forEach(function(email) {
        promiseList.push(_this._hypertyDiscovery(email));
      });

      Promise.all(promiseList).then(function(values) {
        let hyperties = [];

        values.forEach(function(value) {
          hyperties.push(value.hypertyURL);
        });

        resolve(hyperties);
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyChat',
    instance: new HypertyChat(hypertyURL, bus, configuration)
  };

}
