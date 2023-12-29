import React, { forwardRef } from 'react';
import { borderColors } from './css-classes';

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
  style?: any;
  variant?: 'elevated' | 'filled' | 'outlined';
  noPadding?: boolean;
  onClick?: () => void;
};

const defaultCls = 'm3-card rounded-3xl overflow-hidden';
const padding = 'py-[12px] px-[16px]';

const getVariantCls = (variant: CardProps['variant']) => {
  const elevatedCls = 'bg-surface-container-low shadow p-3';
  const outlinedCls = `border ${borderColors['outline-variant']}`;

  if (variant === 'elevated') {
    return elevatedCls;
  }
  if (variant === 'outlined') {
    return outlinedCls;
  }
  return '';
};

const actionCls = 'cursor-pointer';

const createCls = ({
  className,
  variant,
  noPadding,
  clickable,
}: {
  className: string;
  variant: CardProps['variant'];
  noPadding?: boolean;
  clickable: boolean;
}) => {
  const cls = getVariantCls(variant);
  const p = noPadding ? '' : padding;
  const a = clickable ? actionCls : '';

  return `${defaultCls} ${className} ${cls} ${p} ${a}`;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'elevated', ...props }, ref) => {
    const clickable = Boolean(props.onClick);
    const cardCls = createCls({
      className,
      variant,
      noPadding: props.noPadding,
      clickable,
    });

    return (
      <div
        ref={ref}
        style={props.style}
        className={cardCls}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  },
);

export default Card;
