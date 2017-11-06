// Log System
import * as logger from 'loglevel';

import Syncher from './syncher/Syncher';
import DataObjectReporter from './syncher/DataObjectReporter';
import DataObjectObserver from './syncher/DataObjectObserver';

const g = logger.getLogger('Syncher');
const h = logger.getLogger('DataObject');
const i = logger.getLogger('DataObjectChild');
const j = logger.getLogger('DataObjectObserver');
const k = logger.getLogger('DataObjectReporter');
const l = logger.getLogger('DataProvisional');

const none = 5;  // Remove all logs
const defaultLevel = 3; // Show only the info, warn, error
const all = 0; // Show all logs;

g.setLevel(defaultLevel);
h.setLevel(defaultLevel);
i.setLevel(defaultLevel);
j.setLevel(defaultLevel);
k.setLevel(defaultLevel);
l.setLevel(defaultLevel);

export {Syncher, DataObjectReporter, DataObjectObserver};
