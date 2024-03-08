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
    view: CountUpBlockEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    common: true,
  };

  return config;
};

export default applyConfig;
