// Log System
import * as logger from 'loglevel';
import StorageManager from './storage-manager/StorageManager';

const a = logger.getLogger('StorageManager');
a.setLevel(0);

export default StorageManager;
