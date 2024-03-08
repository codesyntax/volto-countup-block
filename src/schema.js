import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  countupblockconfig: {
    id: 'CountUp block configuration',
    defaultMessage: 'CountUp block configuration',
  },
  start: {
    id: 'Start number',
    defaultMessage: 'Start number',
  },
  end: {
    id: 'End number',
    defaultMessage: 'End number',
  },
  duration: {
    id: 'Duration',
    defaultMessage: 'Duration',
  },
  durationHelp: {
    id: 'Duration of the count up',
    defaultMessage: 'Duration of the count up',
  },
  prefix: {
    id: 'Prefix that will be shown before the number',
    defaultMessage: 'Prefix that will be shown before the number',
  },
  suffix: {
    id: 'Suffix that will be shown after the number',
    defaultMessage: 'Suffix that will be shown after the number',
  },
  decimal: {
    id: 'Decimal character to use',
    defaultMessage: 'Decimal character to use',
    initialValue: ',',
  },
  decimals: {
    id: 'Number of decimal characters',
    defaultMessage: 'Number of decimal characters',
  },
  separator: {
    id: 'Thousands separator',
    defaultMessage: 'Thousands separator',
    initialValue: '.',
  },
  delay: {
    id: 'Delay, number of seconds to wait until the counter starts',
    defaultMessage: 'Delay, number of seconds to wait until the counter starts',
  },
  title: {
    id: 'Title of the counter',
    defaultMessage: 'Title of the counter',
  },
  titleTags: {
    id: 'HTML tag that will be used to render the title',
    defaultMessage: 'HTML tag that will be used to render the title',
  },
  titlePosition: {
    id: 'Position of the title tag',
    defaultMessage: 'Position of the title tag',
  },
  above: {
    id: 'Above',
    defaultMessage: 'Above',
  },
  below: {
    id: 'Below',
    defaultMessage: 'Below',
  },
});

export const CountUpBlockSchema = (intl) => ({
  title: intl.formatMessage(messages.countupblockconfig),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['start', 'end', 'duration'],
    },
    {
      id: 'counter',
      title: 'Counter config',
      fields: ['delay', 'prefix', 'suffix', 'decimal', 'decimals', 'separator'],
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
      type: 'number',
    },
    end: {
      title: intl.formatMessage(messages.end),
      type: 'number',
    },
    delay: {
      title: intl.formatMessage(messages.delay),
      type: 'number',
    },
    duration: {
      title: intl.formatMessage(messages.duration),
      description: intl.formatMessage(messages.durationHelp),
      type: 'number',
    },
    prefix: {
      title: intl.formatMessage(messages.prefix),
      type: 'string',
    },
    suffix: {
      title: intl.formatMessage(messages.suffix),
      type: 'string',
    },
    decimal: {
      title: intl.formatMessage(messages.decimal),
      type: 'string',
    },
    decimals: {
      title: intl.formatMessage(messages.decimals),
      type: 'number',
    },
    separator: {
      title: intl.formatMessage(messages.separator),
      type: 'string',
    },
  },
  required: ['start', 'end', 'duration'],
});
