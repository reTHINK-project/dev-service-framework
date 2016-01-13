import ConnectionController from './ConnectionController';
import EventEmitter from '../utils/EventEmitter';

/**
 * Hyperty Connector;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.1.0
 */
class HypertyConnector extends EventEmitter {

  /**
   * Create a new Hyperty Connector
   * @param  {Syncher} syncher - Syncher provided from the runtime core
   */
  constructor(syncher) {

    if (!syncher) throw new Error('The Syncher is a needed parameter');

    super(syncher);

    let _this = this;
    _this.mode = 'offer';

    _this.connectionController = new ConnectionController();

    _this.connectionController.addEventListener('controller:state:change', function(state) {
      if (state === 'answer') {
        _this.mode = state;
        _this._autoConnect(_this.notificationEvent.from);
      }
    });

    // step 2 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
    syncher.onNotification(function(event) {
      console.log('connector have an notification: ', event);

      _this.notificationEvent = event;

      let notification = {
        type: event.type,
        owner: event.value.owner,
        from: event.from,
        to: event.value.to,
        resources: event.value.resources
      };

      if (event.type === 'create' && event.value.owner) {
        // step 5 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
        // trigger notification to the app an wait for an answer
        // to subscribe the objectURL
        _this.trigger('connector:notification', notification);
      } else {
        _this._autoAccept(event.url);
      }

    });

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

      // Step 3 and 4 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
      _this.connectionController.getUserMedia(options).then(function(commResources) {
        console.log('Get webRTC common resources', commResources, hypertyURL);

        // TODO: Optimize the resources to get;
        // and add all options available;
        let initial = {};
        initial.owner = true;
        initial.to = hypertyURL;
        initial.resources = {
          video: options.video,
          audio: options.audio
        };

        // Step 5 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
        return _this._syncher.create({}, [hypertyURL], initial);
      })
      .then(function(connectionDataObject) {
        console.log('Return Create Connection Data Object', connectionDataObject);

        // Step 11 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
        _this.connectionController.connectionDataObjectReporter = connectionDataObject;

        // Step 12 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
        resolve(_this.connectionController);
      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });

    });
  }

  /**
   * Accept the incoming call
   * @method accept
   * @return {Promise}
   */
  accept() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      let objectURL = _this.notificationEvent.url;

      // step 6 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
      // after waiting for an answer, we can now subscribe the objectURL
      _this._syncher.subscribe(objectURL).then(function(connectionDataObject) {
        console.log('Return Subscribe Connection Data Object', connectionDataObject);

        // step 7 and 10 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
        _this.connectionController.connectionDataObjectObserver = connectionDataObject;
        resolve(_this.connectionController);

        let resources = connectionDataObject.data.resources;
        return _this.connectionController.getUserMedia(resources);
      })
      .then(function(commResources) {
        console.log('Get webRTC common resources', commResources);
      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });
    });
  }

  /**
   * Connection is closed by local peer and disconnected;
   * @method disconnect
   * @return {Promise}
   */
  disconnect() {

    let _this = this;

    return new Promise(function(resolve, reject) {

      _this.connectionController.disconnect()
      .then(function(disconnected) {

        console.log('disconnected: ', disconnected);

        resolve(disconnected);
      })
      .catch(function(reason) {
        reject(reason);
      });

    });

  }

  _autoConnect(hypertyURL) {
    let _this = this;

    _this._syncher.create({}, [hypertyURL], {}).then(function(connectionDataObject) {
      console.log('Return Create Connection Data Object', connectionDataObject);
      _this.connectionController.connectionDataObjectReporter = connectionDataObject;
    }).catch(function(reason) {
      console.error(reason);
    });
  }

  _autoAccept(url) {
    let _this = this;

    _this._syncher.subscribe(url).then(function(connectionDataObject) {
      console.log('Return Subscribe Connection Data Object', connectionDataObject);
      _this.connectionController.connectionDataObjectObserver = connectionDataObject;
    });

  }

}

export default HypertyConnector;
