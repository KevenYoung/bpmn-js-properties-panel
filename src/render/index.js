import BpmnPropertiesPanelRenderer from './BpmnPropertiesPanelRenderer';

import Commands from '../cmd';
import { DebounceInputModule } from '@zixel/properties-panel';

export default {
  __depends__: [
    Commands,
    DebounceInputModule
  ],
  __init__: [
    'propertiesPanel'
  ],
  propertiesPanel: [ 'type', BpmnPropertiesPanelRenderer ]
};