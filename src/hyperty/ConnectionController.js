import 'webrtc-adapter-test';

import EventEmitter from '../utils/EventEmitter';

class ConnectionController extends EventEmitter {

  constructor() {

    super();

    let _this = this;

    _this.mode = 'offer';

    _this.mediaConstraints = {
      optional: [],
      mandatory: {
        offerToReceiveAudio:true,
        offerToReceiveVideo:true
      }
    };

    // Prepare the PeerConnection
    let peerConnection = new RTCPeerConnection();

    peerConnection.addEventListener('signalingstatechange', function(event) {
      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
      }
    });

    peerConnection.addEventListener('icecandidate', function(event) {

      if (!event.candidate) return;

      let data = _this._connectionDataObjectReporter.data;
      data.ice = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };

    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function(event) {
      _this.trigger('stream:added', URL.createObjectURL(event.stream));
    });

    _this.peerConnection = peerConnection;
  }

  /**
  * Set the connectionDataObject in the controller
  * @param {ConnectionDataObject} connectionDataObject - have all information about the syncher object;
  */
  set connectionDataObjectReporter(connectionDataObject) {
    if (!connectionDataObject) throw new Error('The Connection Data Object is a needed parameter');

    let _this = this;
    _this._connectionDataObjectReporter = connectionDataObject;

    connectionDataObject.onSubscription(function(event) {
      event.accept();

      if (_this.mode === 'offer') {
        _this.createOffer();
      } else {
        _this.createAnswer();
      }

    });

    console.log('Set connectionDataObject: ', _this._connectionDataObjectReporter);
  }

  /**
  * return the connectionDataObject in the controller
  * @return {ConnectionDataObject} connectionDataObject
  */
  get connectionDataObjectReporter() {
    let _this = this;
    return _this._connectionDataObjectReporter;
  }

  /**
  * Set the connectionDataObject in the controller
  * @param {ConnectionDataObject} connectionDataObject - have all information about the syncher object;
  */
  set connectionDataObjectObserver(connectionDataObject) {
    if (!connectionDataObject) throw new Error('The Connection Data Object is a needed parameter');

    let _this = this;
    _this._connectionDataObjectObserver = connectionDataObject;

    console.log('Set connectionDataObject: ', _this._connectionDataObjectObserver);

    _this.sinalingBus();
  }

  /**
  * return the connectionDataObject in the controller
  * @return {ConnectionDataObject} connectionDataObject
  */
  get connectionDataObjectObserver() {
    let _this = this;
    return _this._connectionDataObjectObserver;
  }

  /**
   * Get WebRTC API resources
   * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
   * @return {Promise}
   */
  getUserMedia(options) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      navigator.getUserMedia(options, function(stream) {
        _this.peerConnection.addStream(stream);
        resolve(stream);
      }, function(reason) {

        reject(reason);

      });

    });
  }

  sinalingBus() {

    var _this = this;

    _this._connectionDataObjectObserver.onChange('type.offer.*', function(event) {
      console.log('CHANGES: ', event);
    });

    _this._connectionDataObjectObserver.onChange('*', function(event) {
      console.debug('message:', event);

      var message = event.data;

      if (message.type === 'offer' || message.type === 'answer') {

        _this.peerConnection.setRemoteDescription(new RTCSessionDescription(message), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);

      } else if (message.type === 'candidate') {
        _this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate: message.candidate}));
      }

    });
  }

  remoteDescriptionSuccess() {
    console.log('remote success');
  }

  remoteDescriptionError(error) {
    console.error('error: ', error);
  }

  createOffer() {
    var _this = this;
    var peerConnection = _this.peerConnection;

    peerConnection.createOffer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.logError);

  }

  createAnswer() {
    var _this = this;
    var peerConnection = _this.peerConnection;

    peerConnection.createAnswer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.logError);
  }

  onLocalSessionCreated(description) {

    var _this = this;
    var peerConnection = _this.peerConnection;

    peerConnection.setLocalDescription(description, function() {

      var data = _this._connectionDataObjectReporter.data;
      data.sdp = {
        sdp: description.sdp,
        type: description.type
      };

    }, _this.logError);

  }

  logError(err) {
    console.error(err.toString(), err);
  }

}

export default ConnectionController;
