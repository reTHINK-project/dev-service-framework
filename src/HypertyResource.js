// Log System
import * as logger from 'loglevel';

import FileHypertyResource from './hyperty-resource/FileHypertyResource';
import HypertyResourceFactory from './hyperty-resource/HypertyResourceFactory';

const e = logger.getLogger('HypertyResource');
const f = logger.getLogger('FileHypertyResource');
e.setLevel(3);
f.setLevel(3);

export { FileHypertyResource };
