import EventEmitter from '../utils/EventEmitter';

class ChatGroup extends EventEmitter {

  constructor(syncher, hypertyDiscovery) {

    if (!syncher) throw Error('Syncher is a necessary dependecy');
    if (!hypertyDiscovery) throw Error('Hyperty discover is a necessary dependecy');

    super(syncher, hypertyDiscovery);

    let _this = this;
    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    syncher.onNotification(function(event) {
      console.log('Notification: ', event);
      _this.trigger('have:new:notification', event);
    });

  }

  set dataObjectReporter(dataObjectReporter) {

    if (!dataObjectReporter) throw new Error('The data object reporter is necessary parameter');

    let _this = this;
    _this._dataObjectReporter = dataObjectReporter;

    let data = dataObjectReporter.data;

    console.info('Set data object reporter: ', data);

    dataObjectReporter.onSubscription(function(event) {
      console.log('Subscription: ', event);
      event.accept();

      _this.trigger('participant:added', event.url);

    });

    dataObjectReporter.onAddChildren('*', _this._processChildren);

  }

  get dataObjectReporter() {
    let _this = this;
    return _this._dataObjectReporter;
  }

  set dataObjectObserver(dataObjectObserver) {
    let _this = this;

    _this._dataObjectObserver = dataObjectObserver;

    console.log('set data Object Observer: ', dataObjectObserver);

    dataObjectObserver.onChange('*', function(event) {
      console.info('Change Event: ', event);
    });

    dataObjectObserver.onAddChildren(_this._processChildren);

  }

  get dataObjectObserver() {
    let _this = this;
    return _this._dataObjectObserver;
  }

  _processChildren(children) {
    console.info('on add children: ', children);
  }

  /**
   * This function is used to send a chat message.
   * @param  {Message} message text to be send
   */
  send(message) {
    console.log(message, this);
    let _this = this;
    let dataObject = _this.dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;

    return new Promise(function(resolve, reject) {

      console.log(dataObject);

      dataObject.addChildren('message', {message: message}).then(function(result) {
        console.info(result);
        resolve(result);
      }).catch(function(reason) {
        console.error('Reason:', reason);
        reject(reason);
      });
    });

  }

  /**
   * This function is used to close an existing Group Chat instance.
   *
   */
  close() {

  }

  join(resource) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      _this.addParticipant(resource).then(function(result) {
        resolve('joined: ', result);
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  // TODO: improve this with an invite;
  /**
   * This function is used to add / invite new participant on an existing Group Chat instance.
   * @return {Promise} Promise with the status
   */
  addParticipant(resource) {

    let _this = this;
    let syncher = _this._syncher;

    return new Promise(function(resolve, reject) {

      console.info('------------------------ Syncher subscribe ---------------------- \n');
      console.info(resource);
      syncher.subscribe(_this._objectDescURL, resource).then(function(dataObjectObserver) {
        console.info('Data Object Observer: ', dataObjectObserver);
        _this.dataObjectObserver = dataObjectObserver;
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  /**
   * This function is used to remove a participant from an existing Group Chat instance.
   * @return {Promise} Promise with the status
   */
  removeParticipant() {
    return new Promise(function(resolve, reject) {

      try {
        resolve('participant removed');
      } catch (e) {
        reject('remove participant fail');
      }

    });

  }

  /**
   * This function is used to open a Group Chat instance that was previously closed.
   * @return {[type]} [description]
   */
  open() {

  }

}

export default ChatGroup;
