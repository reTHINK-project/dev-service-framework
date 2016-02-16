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
  communicationQuality: '',
  participants: [],
  chatMessage: {}
};

export default communication;
