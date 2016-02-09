export const CommunicationStatus = {
  OPEN: 'open',
  PENDING: 'pending',
  CLOSED: 'closed',
  PAUSED: 'paused',
  FAILED: 'failed'
};

class Communication {

  constructor() {

    let _this = this;

    _this.id = '';
    _this.host = '';
    _this.owner = '';
    _this.startingTime = '';
    _this.lastModified = '';
    _this.duration = '';
    _this.communicationStatus = '';
    _this.participant = '';
    _this.CommunicationQuality = '';

  }

}

export default Communication;
