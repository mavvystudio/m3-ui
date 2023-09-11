import { CSSProperties } from 'react';
import { textColor, textSize } from './css-classes';
import { Color, Size } from './types';

export type IconProps = {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: 'outlined' | 'rounded' | 'sharp';
  fontVariant?: string;
  size?: Size;
  color?: Color;
  filled?: boolean;
};

const fontFamily = {
  outlined: 'm3-symbols-outlined',
  rounded: 'm3-symbols-rounded',
  sharp: 'm3-symbols-sharp',
};

const getVariant = (variant: IconProps['variant']) => {
  const cls = 'm3-symbols';

  if (!variant) {
    return cls;
  }

  return `${cls} ${fontFamily[variant]}`;
};

export const Icon = ({ variant, ...props }: IconProps) => {
  const s: any = `${props.fontVariant || 'body'} ${props.size || 'large'}`;
  const sizeCls = textSize[s as 'label small'] || 'text-base';
  const variantCls = getVariant(variant);
  const color = props.color ? textColor[props.color] : '';
  const f = props.filled ? 'm3-icon-filled' : '';

  return (
    <span
      style={props.style}
      className={`m3-icon m3-symbols ${color} ${
        props.className || ''
      } ${sizeCls} ${variantCls} ${f}`}
    >
      {props.children}
    </span>
  );
};

export default Icon;
