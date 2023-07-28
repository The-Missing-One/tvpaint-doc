import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyIconTip from '@site/static/img/tip.png';
import MyIconRemark from '@site/static/img/remark.png';
import MyIconReminder from '@site/static/img/reminder.png';
import MyIconProOnly from '@site/static/img/pro-only.png';

export default function AdmonitionWrapper(props) {
  if (props.type === 'tip') {
    return <Admonition icon={<img src={MyIconTip} />} {...props} />;
  }
  if (props.type === 'note') {
    return <Admonition icon={<img src={MyIconRemark} />} {...props} />;
  }
  if (props.type === 'info') {
    return <Admonition icon={<img src={MyIconReminder} />} {...props} />;
  }
  if (props.type === 'caution') {
    return <Admonition icon={<img src={MyIconProOnly} />} {...props} />;
  }
  return <Admonition  {...props} />;
}