import React, { forwardRef } from 'react';

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
  style?: any;
};

const defaultCls =
  'm3-card bg-surface-container-low shadow p-3 rounded-3xl overflow-hidden';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    const cardCls = `${defaultCls} ${className}`;

    return (
      <div ref={ref} style={props.style} className={cardCls}>
        {props.children}
      </div>
    );
  },
);

export default Card;
