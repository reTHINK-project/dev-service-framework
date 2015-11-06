class SyncSubscription /* implements SyncStatus */ {
  /* private
  _url: HypertyURL
  _status: on | paused
  */

  /* TODO: how to handle pause/resume without losing data?
     a) Should I maintain historical data-changes and a version number, in case an observer wants to resume from version x?
     b) Should I send the actual data in case there is no knowledge of the last state/version of the observer?
  */

  constructor(url, initialStatus) {
    let _this = this;

    _this._url = url;
    _this._status = initialStatus;
  }

  get url() { return this._url; }

  get status() { return this._status; }

  pause() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  resume() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  stop() {
    //TODO: should remove the subscription
    throw 'Not implemented';
  }
}

export default SyncSubscription;
