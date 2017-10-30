// Log System
import * as logger from 'loglevel';
import StorageManager from './storage-manager/StorageManager';

const a = logger.getLogger('StorageManager');
a.setLevel(3);

export default StorageManager;
