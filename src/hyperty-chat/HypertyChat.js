import HypertyDiscovery from '../hyperty-discovery/HypertyDiscovery';
import EventEmitter from '../utils/EventEmitter';
import communication from './communication';
import {divideURL} from '../utils/utils';
import Syncher from '../syncher/Syncher';
import participant from './participant';
import ChatGroup from './Chat';

/**
* Hyperty Chat;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/
class HypertyChat extends EventEmitter {

  constructor(hypertyURL, bus, configuration) {
    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super(hypertyURL, bus, configuration);

    let _this = this;
    let syncher = new Syncher(hypertyURL, bus, configuration);

    let domain = divideURL(hypertyURL).domain;
    let hypertyDiscovery = new HypertyDiscovery(domain, bus);

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    _this._hypertyURL = hypertyURL;
    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

    syncher.onNotification(function(event) {
      console.log('Notification: ', event);
      _this._autoSubscribe(event.url);
    });

  }

  _autoSubscribe(resource) {
    _this.join(resource);
  }

  /**
   * This function is used to create a new Group Chat providing the identifier of the Group to be notified.
   * @param  {String} name             chat name
   * @param  {URL.UserURL} UserURLList List of User allowed
   * @return {Promise}
   */
  create(name, participants) {

    let _this = this;
    let syncher = _this._syncher;
    let hypertyDiscovery = _this._hypertyDiscovery;

    return new Promise(function(resolve, reject) {

      // Create owner participant
      // TODO: create all information to communication;
      communication.owner = _this._hypertyURL;
      communication.id = name;

      // Set the other subscription like a participant
      participant.hypertyResource = _this._hypertyURL;
      communication.participants.push(participant);

      console.info('----------------------- Mapping Particpants -------------------- \n');
      _this._mappingUser(participants).then(function(hyperties){
        console.info('------------------------ Syncher Create ---------------------- \n');
        return syncher.create(_this._objectDescURL, hyperties, {communication: communication});
      })
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

  join(resource) {
    let _this = this;
    let syncher = _this._syncher;

    return new Promise(function(resolve, reject){

      let chat = new ChatGroup(syncher, _this._hypertyDiscovery);

      console.info('------------------------ Syncher subscribe ---------------------- \n');
      console.info(resource);

      syncher.subscribe(_this._objectDescURL, resource).then(function(dataObjectObserver) {
        console.info('Data Object Observer: ', dataObjectObserver);
        chat.dataObjectObserver = dataObjectObserver;

        resolve(chat);
      }).catch(function(reason) {
        reject(reason);
      });

    })
  }

  _mappingUser(userList) {

    let _this = this;

    return new Promise(function(resolve, reject) {
      let promiseList = [];

      userList.forEach(function(email) {
        if (email.length) {
          promiseList.push(_this._hypertyDiscovery.discoverHypertyPerUser(email));
        }
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
