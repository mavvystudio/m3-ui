import React, { CSSProperties } from 'react';
import { textSize } from './css-classes';
import { Color, Size, TextVariant } from './types';
import { getTextColor } from './utils';

export type TextProps = {
  component?: string;
  children?: React.ReactNode;
  className?: string;
  size?: Size;
  variant?: TextVariant;
  color?: Color;
  style?: CSSProperties;
  attrs?: any;
};

export const Text = ({ className = '', ...props }: TextProps) => {
  const s: any = `${props.variant || 'body'} ${props.size || 'large'}`;
  const sizeCls = textSize[s as 'label small'] || 'text-base';
  const textColor = getTextColor(props.color);
  const cls = `${className} m3-text font-main ${sizeCls} ${textColor}`;

  return React.createElement(
    props.component || 'p',
    { className: cls, style: props.style, ...(props.attrs || {}) },
    props.children,
  );
};

export default Text;
