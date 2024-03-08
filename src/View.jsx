import React from 'react';
import CountUp from 'react-countup';
import { Segment } from 'semantic-ui-react';
export const BlockViewComponent = ({ data }) => {
  // Counter config
  const {
    start,
    end,
    duration,
    prefix,
    suffix,
    decimal,
    decimals,
    separator,
    delay,
  } = data;

  // Title config
  const { title, titleTag, titlePosition } = data;
  const TitleTag = titleTag || 'h2';

  return (
    <Segment>
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

export const CountUpBlockView = (props) => {
  const { data } = props;

  return <BlockViewComponent data={data} />;
};
