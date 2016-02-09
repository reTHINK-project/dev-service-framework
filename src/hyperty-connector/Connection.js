// dataObjectReporter.data = {
//    status : "connected",
//    owner : "hyperty://example.com/alicehy",
//    peer : "connection://example.com/alice/bob27012016",
//    ownerPeer : {
//          connectionDescription: {
//             sdp: 's4dfaf1sa3f1asd5f4sdafa',
//             type: 'offer'
//          },
//          iceCandidates: [{
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            {
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            .....
//        ]
//      }
//  }

import OwnerPeer from './OwnerPeer';

class Connection extends Object {

  constructor() {

    super();

    let _this = this;

    _this.status = '';
    _this.owner = '';
    _this.peer = '';

    _this.ownerPeer = new OwnerPeer();
  }

  // set status(value) {
  //   if (!value) throw new Error('The status need a value');
  //
  //   let _this = this;
  //   _this._status = value;
  // }
  //
  // get status() {
  //   let _this = this;
  //   return _this._status;
  // }
  //
  // set owner(value) {
  //   if (!value) throw new Error('The owner need a value');
  //
  //   let _this = this;
  //   _this._owner = value;
  // }
  //
  // get owner() {
  //   let _this = this;
  //   return _this._owner;
  // }
  //
  // set peer(value) {
  //   if (!value) throw new Error('The peer need a value');
  //
  //   let _this = this;
  //   _this._peer = value;
  // }
  //
  // get peer() {
  //   let _this = this;
  //   return _this._peer;
  // }
  //
  // get ownerPeer() {
  //   let _this = this;
  //   return _this._ownerPeer;
  // }

}

export default Connection;
