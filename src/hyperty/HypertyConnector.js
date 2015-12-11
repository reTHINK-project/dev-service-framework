import ConnectionController from './ConnectionController';

/**
 * Hyperty Connector;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.1.0
 */
class HypertyConnector {

  /**
   * Create a new Hyperty Connector
   * @param  {Syncher} syncher - Syncher provided from the runtime core
   */
  constructor(syncher) {

    if (!syncher) throw new Error('The Syncher is a needed parameter');

    let _this = this;

    _this.connectionController = new ConnectionController();

    _this._syncher = syncher;

  }

  /**
   * Establish connection with other client identifier
   * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
   * @param  {Object} options - Object with options to improve the connect
   */
  connect(hypertyURL, options) {
    // TODO: CHange the hypertyURL for a list of URLS
    let _this = this;

    options = options || {video: true, audio: true};

    return new Promise(function(resolve, reject) {

      _this.connectionController.getUserMedia(options).then(function(commResources) {
        console.log('Get webRTC common resources', commResources, hypertyURL);

        return _this._syncher.create({}, [hypertyURL], {});
      })
      .then(function(connectionDataObject) {
        console.log('Return Create Connection Data Object', connectionDataObject);
        _this.connectionController.connectionDataObjectReporter = connectionDataObject;

        resolve(_this.connectionController);
      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });

    });
  }

  accept(options) {
    let _this = this;

    options = {video: true, audio: true};

    return new Promise(function(resolve, reject) {

      console.log('Options: ', options);

      _this.connectionController.getUserMedia(options).then(function(commResources) {
        console.log('Get webRTC common resources', commResources, _this.message.url);

        return _this._syncher.subscribe(_this.message.url);
      })
      .then(function(connectionDataObject) {
        console.log('Return Subscribe Connection Data Object', connectionDataObject);
        _this.connectionController.connectionDataObjectObserver = connectionDataObject;
        resolve(_this.connectionController);
      })
      .catch(function(reason) {
        console.error(reason);
      });
    });
  }

  onNotification(callback) {
    let _this = this;
    _this.callback = callback;
  }

  _onNotification(notification, hypertyURL) {
    let _this = this;

    let message = notification;
    _this.message = message;

    if (message.type === 'create') {
      _this.callback(notification, hypertyURL);
    }

  }

}

export default HypertyConnector;
