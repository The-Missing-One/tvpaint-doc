import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyIcon from '@site/static/img/tip.png';

export default function AdmonitionWrapper(props) {
  if (props.type === 'tip') {
    return <Admonition icon={<img src={MyIcon} />} {...props} />;
  }
  return <Admonition  {...props} />;
}