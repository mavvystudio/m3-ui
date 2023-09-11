import { bg, borderColors } from './css-classes';
import { Color } from './types';
import Icon, { IconProps } from './Icon';

export type SwitchProps = {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  color?: Color;
  selected: boolean;
  label?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  activeIconProps?: IconProps;
  inactiveIconProps?: IconProps;
  disabled?: boolean;
};

const createRootCls = (props: SwitchProps) => {
  const cls = 'm3-switch group/switch flex gap-x-3 cursor-pointer';
  const s = props.selected ? ' selected' : '';
  const d = props.disabled ? ' disabled' : '';

  return `${cls}${s}${d}`;
};

const createTrackCls = (props: SwitchProps) => {
  const color = props.color || 'primary';
  const c = props.selected
    ? `${bg[color]} ${borderColors[color]}`
    : 'bg-surface-container-highest border-outline';
  const cls =
    'w-[52px] h-[32px] rounded-full overflow-hidden border-2 flex items-center';
  return `${cls} ${c}`;
};

const createThumbCls = (props: SwitchProps) => {
  const color = props.color || 'primary';
  const c = props.selected ? bg[`on-${color}` as 'primary'] : 'bg-outline';
  const state = props.selected ? 'active' : 'inactive';
  const stateCls = {
    active: 'scale-150 translate-x-[26px]',
    inactive: 'translate-x-[6px]',
  };
  const cls =
    'flex items-center justify-center transition-all origin-center w-[16px] h-[16px] rounded-full group-[:active:not(.disabled)]/switch:scale-[1.75]';
  return `${cls} ${c} ${stateCls[state]}`;
};

const createIconColor = (props: SwitchProps) => {
  if (!props.selected) {
    return 'surface-container-highest';
  }
  return props.color || 'primary';
};

export const Switch = ({
  activeIconProps = {},
  inactiveIconProps = {},
  ...props
}: SwitchProps) => {
  const cls = createRootCls(props);
  const trackCls = createTrackCls(props);
  const thumbCls = createThumbCls(props);
  const icon = props.selected ? props.activeIcon : props.inactiveIcon;
  const hasIcon = Boolean(icon);
  const iconColor = createIconColor(props);
  const iconProps = props.selected ? activeIconProps : inactiveIconProps;

  const handleClick = (event: React.MouseEvent) => {
    if (props.disabled) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <div tabIndex={-1} onClick={handleClick} className={cls}>
      <div className={trackCls}>
        <div className={thumbCls}>
          {hasIcon && (
            <Icon size="small" color={iconColor} {...iconProps}>
              {icon}
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
};

export default Switch;
