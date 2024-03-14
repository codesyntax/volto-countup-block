import config from '@plone/volto/registry';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Segment } from 'semantic-ui-react';
import { withBlockExtensions } from '@plone/volto/helpers';

const CountUpBlockView = ({ data, className }) => {
  const values = config.blocks.blocksConfig['countUpBlock'].schemaValues;
  const {
    delay = values.delay ?? 0,
    duration = values.duration ?? 2,
    prefix = values.prefix ?? '',
    suffix = values.suffix ?? '',
    decimal = values.decimal ?? ',',
    decimals = values.decimals ?? 0,
    separator = values.separator ?? '',
    basic = values.basic ?? false,
    inverted = values.inverted ?? false,
    compact = values.compact ?? false,
    circular = values.circular ?? false,
    floated = values.floated ?? false,
    textAlign = values.textAlign ?? false,
    color = values.color ?? '',
    size = values.size ?? '',
  } = data;

  const countUpData = {
    delay,
    duration,
    prefix,
    suffix,
    decimal,
    decimals,
    separator,
  };

  const segmentData = {
    basic,
    inverted,
    compact,
    circular,
    floated,
    textAlign,
    size,
    color,
  };

  // Title config
  const { title, titleTag, titlePosition = 'above' } = data;
  const TitleTag = titleTag || 'h2';

  return (
    <Segment
      className={cx('countup-block-wrapper', className)}
      {...segmentData}
    >
      {title && titlePosition === 'above' && <TitleTag>{title}</TitleTag>}

      <CountUp {...data} {...countUpData} />
      {title && titlePosition === 'below' && <TitleTag>{title}</TitleTag>}
    </Segment>
  );
};

export default withBlockExtensions(CountUpBlockView);
