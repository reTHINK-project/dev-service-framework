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
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }

    });

    peerConnection.addEventListener('iceconnectionstatechange', function(event) {
      console.info(event.currentTarget.iceConnectionState);
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
      console.info('add stream from mode: ', _this.mode);
      _this.trigger('stream:added', URL.createObjectURL(event.stream), _this.connectionDataObjectReporter, _this.connectionDataObjectObserver);
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

    _this.changePeerInformation();
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
  getUserMedia(constraints) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        _this.peerConnection.addStream(mediaStream);
        resolve(mediaStream);
      })
      .catch(function(reason) {
        reject(reason);
      });
    });
  }

  changePeerInformation() {

    let _this = this;

    _this._connectionDataObjectObserver.onChange('*', function(event) {
      console.debug('message:', event);

      let message = event.data;

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
    let _this = this;

    _this.peerConnection.createOffer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.logError, _this.mediaConstraints);

  }

  createAnswer() {
    let _this = this;

    _this.peerConnection.createAnswer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.logError);
  }

  /**
   * Disconnect the peer connection
   * @method disconnect
   * @return {Promise}
   */
  disconnect() {

    // TODO: optimize the disconnect function

    let _this = this;

    return new Promise(function(resolve, reject) {

      try {

        _this.peerConnection.close();

        resolve(true);
      } catch (e) {
        reject('error disconnecting connection');
      }

    });

  }

  onLocalSessionCreated(description) {

    let _this = this;
    let peerConnection = _this.peerConnection;

    peerConnection.setLocalDescription(description, function() {

      let data = _this._connectionDataObjectReporter.data;
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
