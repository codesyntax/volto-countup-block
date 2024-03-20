import { CountUpBlockEdit } from './Edit.jsx';
import CountUpBlockView from './View.jsx';
import iconSVG from '@plone/volto/icons/circle-top.svg';

const applyConfig = (config) => {
  // Own blocks
  config.blocks.blocksConfig['countUpBlock'] = {
    id: 'countUpBlock',
    title: 'Count Up',
    icon: iconSVG,
    edit: CountUpBlockEdit,
    view: CountUpBlockView,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    common: true,
    titleTags: [
      ['h1', 'h1'],
      ['h2', 'h2'],
      ['h3', 'h3'],
      ['h4', 'h4'],
      ['strong', 'strong'],
    ],
    schemaEditable: {
      time: ['duration', 'delay'],
      extras: ['prefix', 'suffix'],
      decimals: ['decimal', 'decimals'],
      thousands: ['separator'],
      styling: [
        'basic',
        'inverted',
        'compact',
        'circular',
        'floated',
        'textAlign',
        'color',
      ],
    },
    schemaValues: {
      duration: 2,
      delay: 0,
      prefix: '',
      suffix: '',
      decimal: ',',
      decimals: 0,
      separator: '',
      basic: false,
      inverted: false,
      compact: false,
      circular: false,
      floated: false,
      textAlign: false,
      color: '',
    },
    colors: [
      { name: 'transparent', value: 'transparent' },
      { name: 'grey', value: 'grey' },
      { name: 'black', value: 'black' },
      { name: 'red', value: 'red' },
      { name: 'green', value: 'green' },
      { name: 'blue', value: 'blue' },
      { name: 'yellow', value: 'yellow' },
      { name: 'orange', value: 'orange' },
      { name: 'olive', value: 'olive' },
      { name: 'teal', value: 'teal' },
      { name: 'violet', value: 'violet' },
      { name: 'purple', value: 'purple' },
      { name: 'pink', value: 'pink' },
      { name: 'brown', value: 'brown' },
    ],
  };

  return config;
};

export default applyConfig;
