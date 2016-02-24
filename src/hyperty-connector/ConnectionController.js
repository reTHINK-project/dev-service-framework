/* jshint undef: true */
/* globals RTCPeerConnection */
/* globals RTCSessionDescription */
/* globals RTCIceCandidate */

import 'webrtc-adapter-test';

import EventEmitter from '../utils/EventEmitter';
import connection from './connection';
import peer from './peer';

class ConnectionController extends EventEmitter {

  constructor(syncher, domain) {

    super(syncher);

    let _this = this;

    _this.syncher = syncher;
    _this.mode = 'offer';

    _this._objectDescURL = 'hyperty-catalogue://' + domain + '/.well-known/dataschemas/FakeDataSchema';

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

      console.info('signalingstatechange', event.currentTarget.signalingState);

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
        _this.trigger('controller:state:change', _this.mode);
      }

    });

    peerConnection.addEventListener('iceconnectionstatechange', function(event) {
      console.info('iceconnectionstatechange', event.currentTarget.iceConnectionState);
      let data = _this._dataObjectReporter.data;
      if (data.hasOwnProperty('connection')) {
        data.connection.status = event.currentTarget.iceConnectionState;
      }
    });

    peerConnection.addEventListener('icecandidate', function(event) {

      if (!event.candidate) return;

      let icecandidate = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };

      let data = _this._dataObjectReporter.data;

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.iceCandidates.push(icecandidate);
      } else {
        data.peer.iceCandidates.push(icecandidate);
      }

    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function(event) {
      _this.trigger('stream:added', URL.createObjectURL(event.stream), _this.dataObjectReporter, _this.dataObjectObserver);
    });

    _this.peerConnection = peerConnection;

  }

  // TODO: check if it is realy necessary this remotePeerInformation;
  /**
   * Set Remote peer information, like Hyperty.
   * @param  {Object} remotePeerInformation information about the peer;
   */
  set remotePeerInformation(remotePeerInformation) {
    let _this = this;
    _this._remotePeerInformation = remotePeerInformation;
  }

  /**
   * Get information relative to the Remote Peer;
   * @return {Object} remotePeerInformation;
   */
  get remotePeerInformation() {
    let _this = this;
    return _this._remotePeerInformation;
  }

  /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */
  set dataObjectReporter(dataObjectReporter) {
    if (!dataObjectReporter) throw new Error('The Data Object Reporter is a needed parameter');

    let _this = this;
    _this._dataObjectReporter = dataObjectReporter;

    let data = _this._dataObjectReporter.data;

    dataObjectReporter.onSubscription(function(event) {
      event.accept();
    });

    if (_this.mode === 'offer') {
      data.connection = connection;

      _this.createOffer();
    } else {
      data.peer = peer;

      _this.createAnswer();
    }

    console.debug(_this._dataObjectReporter);

  }

  /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */
  get dataObjectReporter() {
    let _this = this;
    return _this._dataObjectReporter;
  }

  /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */
  set dataObjectObserver(dataObjectObserver) {
    if (!dataObjectObserver) throw new Error('The Data Object Observer is a needed parameter');

    let _this = this;
    _this._dataObjectObserver = dataObjectObserver;
    _this.changePeerInformation(dataObjectObserver);

  }

  /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */
  get dataObjectObserver() {
    let _this = this;
    return _this._dataObjectObserver;
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

  changePeerInformation(dataObjectObserver) {

      let _this = this;

      console.info(JSON.stringify(dataObjectObserver.data));

      _this.processPeerInformation(dataObjectObserver.data);

      dataObjectObserver.onChange('*', function(event) {
        console.info('Observer on change message: ', event);
        _this.processPeerInformation(dataObjectObserver.data);
      });
    }

    processPeerInformation(data) {
      let _this = this;

      console.debug(JSON.stringify(data));

      let isOwner = data.hasOwnProperty('connection');

      let connectionDescription = isOwner ? data.connection.ownerPeer.connectionDescription : data.peer.connectionDescription;
      let iceCandidates = isOwner ? data.connection.ownerPeer.iceCandidates : data.peer.iceCandidates;

      console.log(connectionDescription, iceCandidates);

      if (connectionDescription.type === 'offer' || connectionDescription.type === 'answer') {
        console.info('Process Connection Description: ', connectionDescription);
        _this.peerConnection.setRemoteDescription(new RTCSessionDescription(connectionDescription), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
      }

      if (iceCandidates) {
        iceCandidates.forEach(function(ice) {
          if (ice.type === 'candidate') {
            console.info('Process Ice Candidate: ', ice);
            _this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate: ice.candidate}), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
          }
        });
      }

    }

  remoteDescriptionSuccess() {
    console.info('remote success');
  }

  remoteDescriptionError(error) {
    console.error('error: ', error);
  }

  createOffer() {
    let _this = this;

    _this.peerConnection.createOffer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.infoError, _this.mediaConstraints);

  }

  createAnswer() {
    let _this = this;

    _this.peerConnection.createAnswer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.infoError);
  }

  onLocalSessionCreated(description) {

    let _this = this;

    _this.peerConnection.setLocalDescription(description, function() {

      let data = _this._dataObjectReporter.data;
      let sdpConnection = {
        sdp: description.sdp,
        type: description.type
      };

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.connectionDescription = sdpConnection;
      } else {
        data.peer.connectionDescription = sdpConnection;
      }

    }, _this.infoError);

  }

  infoError(err) {
    console.error(err.toString(), err);
  }

  /**
   * Used to accept an incoming connection request.
   * @method accept
   * @return {Promise}
   */
  accept(options) {

    let _this = this;
    let syncher = _this.syncher;

    options = options || {video: true, audio: true};

    console.log('Remote Peer Information: ', _this._remotePeerInformation);
    let remotePeer = _this._remotePeerInformation.from;

    return new Promise(function(resolve, reject) {

      try {

        console.info('------------------------ Syncher Create ---------------------- \n');
        _this.getUserMedia(options).then(function(mediaConstraints) {
          console.info('1. Return media constraints ', mediaConstraints);
          return syncher.create(_this._objectDescURL, [remotePeer], {});
        }).then(function(dataObjectReporter) {
          console.info('2. Return the Data Object Reporter ', dataObjectReporter);
          _this.dataObjectReporter = dataObjectReporter;
          resolve('accepted');
        })
        .catch(function(reason) {
          reject(reason);
        });

      } catch (e) {
        reject('error accepting connection');
      }
    });

  }

  /**
  * Used to decline an incoming connection request.
  * @method decline
  * @return {Promise}
  */
  decline() {

    let _this = this;
    let syncher = _this.syncher;

    return new Promise(function(resolve, reject) {

      try {
        console.log('syncher: ', syncher);
        resolve('Declined');
      } catch (e) {
        reject(e);
      }
    });

  }

  /**
   * Used to close an existing connection instance.
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

  /**
   * Used to add/invite new peers on an existing connection instance (for multiparty connections).
   * @method addPeer
   * @return {Promise}
   */
   addPeer() {

   }

  /**
   * Used to remove a peer from an existing connection instance.
   * @method removePeer
   * @return {Promise}
   */
  removePeer() {

  }

  // Peer Actions
  disableMic() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let localStream = _this.peerConnection.getLocalStreams()[0];
        let audioTrack = localStream.getAudioTracks()[0];

        audioTrack.enabled = audioTrack.enabled ? false : true;
        resolve(audioTrack.enabled);
      } catch (e) {
        reject(e);
      }

    });

  }

  disableCam() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let localStream = _this.peerConnection.getLocalStreams()[0];
        let videoTrack = localStream.getVideoTracks()[0];

        videoTrack.enabled = videoTrack.enabled ? false : true;

        resolve(videoTrack.enabled);
      } catch (e) {
        reject(e);
      }
    });

  }

  mute() {

    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let remoteStream = _this.peerConnection.getRemoteStreams()[0];
        let audioTrack = remoteStream.getAudioTracks()[0];

        audioTrack.enabled = audioTrack.enabled ? false : true;

        resolve(audioTrack.enabled);
      } catch (e) {
        reject(e);
      }
    });

  }

}

export default ConnectionController;
