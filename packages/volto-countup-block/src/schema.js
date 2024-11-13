import config from '@plone/volto/registry';
import messages from './messages.js';

export const CountUpBlockSchema = (intl, data) => {
  const countUpConfig = config.blocks.blocksConfig['countUpBlock'];
  const decimals =
    (data.start % 1 !== 0 || data.end % 1 !== 0) &&
    countUpConfig.schemaEditable.decimals.length
      ? countUpConfig.schemaEditable.decimals
      : [];
  const thousands =
    (data.start >= 1000 || data.end >= 1000) &&
    countUpConfig.schemaEditable.thousands.length
      ? countUpConfig.schemaEditable.thousands
      : [];
  const time = countUpConfig.schemaEditable.time?.length
    ? [
        {
          id: 'time',
          title: 'Time config',
          fields: countUpConfig.schemaEditable.time,
        },
      ]
    : [];
  const separator =
    decimals.length || thousands.length
      ? [
          {
            id: 'separator',
            title: 'Separators config',
            fields: [...decimals, ...thousands],
          },
        ]
      : [];
  const extras = countUpConfig.schemaEditable.extras?.length
    ? [
        {
          id: 'extras',
          title: 'Extra config',
          fields: countUpConfig.schemaEditable.extras,
        },
      ]
    : [];
  const styling = countUpConfig.schemaEditable.extras?.length
    ? [
        {
          id: 'styling',
          title: 'Style config',
          fields: countUpConfig.schemaEditable.styling,
        },
      ]
    : [];
  return {
    title: intl.formatMessage(messages.countupblockconfig),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['start', 'end'],
      },
      ...time,
      ...separator,
      ...extras,
      ...styling,
      {
        id: 'title',
        title: 'Title',
        fields: ['title', 'titleTag', 'titlePosition'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
        type: 'string',
      },
      titleTag: {
        title: intl.formatMessage(messages.titleTags),
        choices: countUpConfig.titleTags,
      },
      titlePosition: {
        title: intl.formatMessage(messages.titlePosition),
        choices: [
          ['above', intl.formatMessage(messages.above)],
          ['below', intl.formatMessage(messages.below)],
        ],
      },
      start: {
        title: intl.formatMessage(messages.start),
        description: intl.formatMessage(messages.startHelp),
        type: 'number',
      },
      end: {
        title: intl.formatMessage(messages.end),
        description: intl.formatMessage(messages.endHelp),
        type: 'number',
      },
      delay: {
        title: intl.formatMessage(messages.delay),
        description: intl.formatMessage(messages.delayHelp),
        type: 'number',
      },
      duration: {
        title: intl.formatMessage(messages.duration),
        description: intl.formatMessage(messages.durationHelp),
        type: 'number',
      },
      prefix: {
        title: intl.formatMessage(messages.prefix),
        description: intl.formatMessage(messages.prefixHelp),
        type: 'string',
      },
      suffix: {
        title: intl.formatMessage(messages.suffix),
        description: intl.formatMessage(messages.suffixHelp),
        type: 'string',
      },
      decimal: {
        title: intl.formatMessage(messages.decimal),
        description: intl.formatMessage(messages.decimalHelp),
        type: 'string',
      },
      decimals: {
        title: intl.formatMessage(messages.decimals),
        description: intl.formatMessage(messages.decimalsHelp),
        type: 'number',
      },
      separator: {
        title: intl.formatMessage(messages.separator),
        type: 'string',
      },
      basic: {
        title: intl.formatMessage(messages.basic),
        type: 'boolean',
      },
      inverted: {
        title: intl.formatMessage(messages.inverted),
        type: 'boolean',
      },
      compact: {
        title: intl.formatMessage(messages.compact),
        type: 'boolean',
      },
      circular: {
        title: intl.formatMessage(messages.circular),
        type: 'boolean',
      },
      floated: {
        title: intl.formatMessage(messages.floated),
        choices: [
          ['left', intl.formatMessage(messages.left)],
          ['right', intl.formatMessage(messages.right)],
        ],
      },
      textAlign: {
        title: intl.formatMessage(messages.textAlign),
        choices: [
          ['left', intl.formatMessage(messages.left)],
          ['right', intl.formatMessage(messages.right)],
          ['center', intl.formatMessage(messages.center)],
        ],
      },
      color: {
        title: intl.formatMessage(messages.color),
        widget: 'color_picker',
        colors: countUpConfig.colors,
      },
    },
    required: ['start', 'end'],
  };
};
