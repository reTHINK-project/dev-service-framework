// polyfills
// Removed because the compatibility of runtime-nodejs
// import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

import Syncher from './syncher/Syncher';
import DataObjectReporter from './syncher/DataObjectReporter';
import DataObjectObserver from './syncher/DataObjectObserver';

export {Syncher, DataObjectReporter, DataObjectObserver};
