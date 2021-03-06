// Log System
import * as logger from 'loglevel';

import Syncher from './syncher/Syncher';
import DataObjectReporter from './syncher/DataObjectReporter';
import DataObjectObserver from './syncher/DataObjectObserver';
import NotificationHandler from './syncher/NotificationHandler';

const g = logger.getLogger('Syncher');
const h = logger.getLogger('DataObject');
const i = logger.getLogger('DataObjectChild');
const j = logger.getLogger('DataObjectObserver');
const k = logger.getLogger('DataObjectReporter');
const l = logger.getLogger('DataProvisional');

const all = 0; // Show all logs;
const none = 5;  // Remove all logs

const defaultLevel = all; // Show only the info, warn, error

g.setLevel(defaultLevel);
h.setLevel(defaultLevel);
i.setLevel(defaultLevel);
j.setLevel(defaultLevel);
k.setLevel(defaultLevel);
l.setLevel(defaultLevel);

/*g.setLevel(all);
h.setLevel(all);
i.setLevel(all);
j.setLevel(all);
k.setLevel(all);
l.setLevel(all);*/

export {Syncher, DataObjectReporter, DataObjectObserver, NotificationHandler};
