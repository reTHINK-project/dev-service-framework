// Log System
import * as logger from 'loglevel';

import RuntimeCatalogue from './runtime-catalogue/RuntimeCatalogue';

const b = logger.getLogger('RuntimeCatalogue');
b.setLevel(0);

export {RuntimeCatalogue};
