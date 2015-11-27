import EventEmitter from '../utils/EventEmitter';

/**
 * Hyperty Connector;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.1.0
 */
class HypertyConnector extends EventEmitter {

  /**
   * Create a new Hyperty Connector
   * @param  {MessageBus} messageBus - Message Bus provided from the runtime core
   * @param  {Syncher}    syncher - Syncher provided from the runtime core
   */
  constructor(messageBus, syncher) {

    super(messageBus, syncher);

    let _this = this;

    _this._messageBus = messageBus;
    _this._syncher = syncher;
  }

  /**
   * Establish connection with other client identifier
   * @param  {[type]} identifier - Define the identifier of the other client
   * @param  {Object} options - Object with options to improve the connect
   */
  connect(identifier, options) {
    let _this = this;
    let messageBus = _this._messageBus;

    let messageDiscovery = {
      to: 'user://ua.pt/alice/123',
      from: 'user://ua.pt/bob/123',
      type: 'message',
      body:{
        value: 'create new message'
      }
    };

    // should postMessage to messageBus with message to discover the other client identifier
    messageBus.postMessage(messageDiscovery);

    // Receive the message whit the Client hyperty URL;
    // and get the resources available
    messageBus.addListener('user://ua.pt/alice/123', function(msg) {

      _this.createConnectionTo('user://ua.pt/bob/123');

    });

  }

  createConnectionTo(hypertyURL) {
    let _this = this;

    _this.getResources(options).then(function(result) {
      console.info('Get the WebRTC API resources: ', result);

      // return _this._syncher.create();
    }).then(function(ConnectionDataObject) {

    }).catch(function(reason) {

    });
  }

  /**
   * Get WebRTC API resources
   * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
   * @return {Promise}
   */
  getResources(options) {
    return new Promise(function(resolve, reject) {

      resolve({video: 'video', audio:'audio'});

    });
  }

}

export default HypertyConnector;
