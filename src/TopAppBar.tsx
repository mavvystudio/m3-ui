import { bg } from './css-classes';
import type { Color } from './types';

export type TopAppBarProps = {
  color?: Color;
  className?: string;
  variant?: 'small' | 'large' | 'medium' | 'center';
  children?: React.ReactNode;
};

const createRootCls = ({ className = '' }: TopAppBarProps) => {
  const cls =
    'm3-top-app-bar group/top-app-bar flex items-center w-full h-[64px] top-0 px-[16px]';

  return `${cls} ${className}`;
};

const createColor = (color?: Color) => bg[color || 'primary'] || bg.primary;

export const TopAppBar = (props: TopAppBarProps) => {
  const cls = createRootCls(props);
  const color = createColor(props.color);
  const c = `${cls} ${color}`;

  return <div className={c}>{props.children}</div>;
};

export default TopAppBar;
