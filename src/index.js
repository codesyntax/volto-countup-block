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
    group: 'common',
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
