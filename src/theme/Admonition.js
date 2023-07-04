import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyIcon from '@site/static/img/tip.png';

export default function AdmonitionWrapper(props) {
  if (props.type === 'tip') {
    return <Admonition icon={<img src='/img/tip.png' />} {...props} />;
  }
  if (props.type === 'note') {
    return <Admonition icon={<img src='/img/remark.png' />} {...props} />;
  }
  if (props.type === 'info') {
    return <Admonition icon={<img src='/img/reminder.png' />} {...props} />;
  }
  if (props.type === 'caution') {
    return <Admonition icon={<img src='/img/pro-only.png' />} {...props} />;
  }
  return <Admonition  {...props} />;
}