import React, { Children } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
  const {
    className, variant, color, font, size, weight, hoverEffect, transition, children, type
  } = props;

  const variantsMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    li: 'li',
    span: 'span',
  };

  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    black: 'text-black',
    white: 'text-white',
  };

  const weightMap = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  };

  const fontMap = {
    sans: 'font-sans',
    title: 'font-title',
  };

  const sizeMap = {
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-base sm:text-lg',
    '2lg': 'text-lg sm:text-2lg',
    xl: 'text-2lg sm:text-xl',
    '2xl': 'text-2lg sm:text-2xl',
    '3xl': 'text-xl sm:text-3xl',
    '4xl': 'text-2xl sm:text-4xl',
    '5xl': 'text-2xl sm:text-5xl',
  };

  const hoverEffectMap = {
    none: '',
    black: 'hover:text-black',
    underline: 'hover:underline',
    opacity: 'hover:opacity-100',
  };

  const transitionMap = {
    none: '',
    fast: 'transition-all duration-150 ease-in-out',
    medium: 'transition-all duration-300 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
  };

  const TypeList = {
      tip: {
        background: '',
        symbol: '/img/tip.png',
      },
      remark: {
        background: '',
        symbol: '/img/remark.png',
      },
      reminder: {
        background: '',
        symbol: '/img/reminder.png',
      },
      pro: {
        background: '',
        symbol: '/img/pro.png',
      }
  };

  return (
    <div className="container">
      <div className="row">
        <img src={TypeList[type].symbol} />
        {children}
      </div>
    </div>
  );
};

CommentSection.defaultProps = {
  className: '',
  variant: 'body',
  size: 'base',
  font: 'sans',
  color: 'primary',
  weight: 'normal',
  hoverEffect: 'none',
  transition: 'none',
  children: null,
};

CommentSection.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  hoverEffect: PropTypes.string,
  transition: PropTypes.string,
  children: PropTypes.node,
};

export default CommentSection;