import { CountUpBlockEdit } from './Edit.jsx';
import { CountUpBlockView } from './View.jsx';
import mapSVG from '@plone/volto/icons/map.svg';

const applyConfig = (config) => {
  // Own blocks
  config.blocks.blocksConfig['countUpBlock'] = {
    id: 'countUpBlock',
    title: 'Count Up',
    icon: mapSVG,
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
  };

  return config;
};

export default applyConfig;
