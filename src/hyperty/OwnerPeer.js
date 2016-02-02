class OwnerPeer {

  constructor() {
    console.log('OwnerPeer');

    let _this = this;

    _this.connectionDescription = {};
    _this.iceCandidates = [];
  }

  // set connectionDescription(value) {
  //   if (!value) throw new Error('The connectionDescription need a value');
  //
  //   let _this = this;
  //
  //   _this._connectionDescription = value;
  // }
  //
  // get connectionDescription() {
  //   let _this = this;
  //
  //   return _this._connectionDescription;
  // }
  //
  // set iceCandidates(value) {
  //   if (!value) throw new Error('The iceCandidates need a value');
  //
  //   let _this = this;
  //   if (!_this._icecandidates) _this._icecandidates = [];
  //
  //   _this._icecandidates.push(value);
  //
  //   console.log(_this._icecandidates);
  // }
  //
  // get iceCandidates() {
  //   let _this = this;
  //   return _this._icecandidates;
  // }

}

export default OwnerPeer;
