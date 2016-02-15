export const CommunicationStatus = {
  OPEN: 'open',
  PENDING: 'pending',
  CLOSED: 'closed',
  PAUSED: 'paused',
  FAILED: 'failed'
};

let communication = {
  id: '',
  host: '',
  owner: '',
  startingTime: '',
  lastModified: '',
  duration: '',
  communicationStatus: '',
  participant: '',
  CommunicationQuality: '',
  chatMessage: {}
};

export default communication;
