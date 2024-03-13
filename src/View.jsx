import React from 'react';
import CountUp from 'react-countup';
import { Segment } from 'semantic-ui-react';
import { withBlockExtensions } from '@plone/volto/helpers';

const CountUpBlockView = ({ data, className }) => {
  const {
    start,
    end,
    duration,
    prefix,
    suffix,
    decimal,
    decimals,
    separator,
    delay = 2,
  } = data;

  // Title config
  const { title, titleTag, titlePosition = 'above' } = data;
  const TitleTag = titleTag || 'h2';

  return (
    <Segment className={className}>
      {title && titlePosition === 'above' && <TitleTag>{title}</TitleTag>}

      <CountUp
        delay={delay}
        start={start}
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        decimal={decimal}
        decimals={decimals}
        separator={separator}
      />
      {title && titlePosition === 'below' && <TitleTag>{title}</TitleTag>}
    </Segment>
  );
};

export default withBlockExtensions(CountUpBlockView);
