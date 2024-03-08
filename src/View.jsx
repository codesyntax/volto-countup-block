import React from 'react';
import CountUp from 'react-countup';
export const BlockViewComponent = (props) => {
  const { data } = props;

  return <CountUp start={0} end={17000} duration={10} delay={0} />;
};

export const CountUpBlockView = (props) => {
  const { data } = props;

  return <BlockViewComponent data={data} />;
};
