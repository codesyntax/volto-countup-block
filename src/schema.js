import config from '@plone/volto/registry';
import messages from './messages.js';

export const CountUpBlockSchema = (intl, data) => {
  const decimals =
    data.start % 1 !== 0 || data.end % 1 !== 0 ? [('decimal', 'decimals')] : [];
  const thousands = data.start >= 1000 || data.end >= 1000 ? ['separator'] : [];
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
  return {
    title: intl.formatMessage(messages.countupblockconfig),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['start', 'end'],
      },
      {
        id: 'time',
        title: 'Time config',
        fields: ['duration', 'delay'],
      },
      ...separator,
      {
        id: 'extras',
        title: 'Extra config',
        fields: ['prefix', 'suffix'],
      },
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
        choices: config.blocks.blocksConfig['countUpBlock'].titleTags,
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
    },
    required: ['start', 'end'],
  };
};
