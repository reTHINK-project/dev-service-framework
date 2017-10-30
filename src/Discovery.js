// Log System
import * as logger from 'loglevel';

import Discovery from './discovery/Discovery';
import RegistrationStatus from './discovery/RegistrationStatus';

const c = logger.getLogger('RegistrationStatus');
const d = logger.getLogger('Discovery');
c.setLevel(3);
d.setLevel(3);

export {Discovery, RegistrationStatus};
