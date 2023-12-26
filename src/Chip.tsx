import { borderColors } from './css-classes';
import { Color, Size } from './types';
import { bgColor } from './utils';

import Icon from './Icon';
import Text from './Text';

export type ChipProps = {
  children: any;
  color?: Color;
  leadingIcon?: string;
  leadingIconClassName?: string;
  trailingIcon?: string;
  trailingIconClassName?: string;
  className?: string;
  textClassName?: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  LeadingComponent?: any;
  TrailingComponent?: any;
  variant?: 'filled' | 'outlined';
  size?: Size;
};

const sizes = {
  small: 'max-h-[30px] min-h-[30px]',
  medium: 'max-h-[30px] min-h-[30px]',
  large: 'max-h-[30px] min-h-[30px]',
};

const defaultRootCls =
  'm3-chip group/chip overflow-hidden relative flex gap-y-1 gap-x-1 cursor-pointer border self-start py-1 rounded-lg items-center';

const createRootCls = (
  cls: string,
  props: Pick<
    ChipProps,
    'color' | 'size' | 'selected' | 'leadingIcon' | 'trailingIcon'
  >,
) => {
  const border = props.selected
    ? borderColors[props.color || ('outline-variant' as 'primary')]
    : borderColors['outline-variant'];
  const bg = props.selected ? bgColor(props.color || 'outline-variant') : '';
  const selectedCls = props.selected ? 'm3-chip-selected' : '';
  const pl = Boolean(props.leadingIcon) ? 'pl-2' : 'pl-3';
  const pr = Boolean(props.trailingIcon) ? 'pr-2' : 'pr-3';
  const s = sizes[props.size || 'medium'] || sizes.medium;

  return `${defaultRootCls} ${cls} ${bg} ${selectedCls} ${border} ${pl} ${pr} ${s}`;
};

const createTextColor = (props: Pick<ChipProps, 'selected' | 'color'>) => {
  if (props.selected && props.color) {
    return `on-${props.color}` as Color;
  }

  return `on-surface`;
};

export const Chip = ({
  className = '',
  textClassName = '',
  variant = 'outlined',
  ...props
}: ChipProps) => {
  const rootCls = createRootCls(className, props);
  const txtCls = `${textClassName}`;
  const txtColor = createTextColor(props);
  const hasLeadingIcon = Boolean(props.leadingIcon);
  const hasTrailingIcon = Boolean(props.trailingIcon);
  const iconColor = props.selected ? txtColor : props.color || txtColor;

  return (
    <div onClick={props.onClick} className={rootCls}>
      {hasLeadingIcon && (
        <Icon
          color={iconColor}
          className={`${props.leadingIconClassName || ''} text-base`}
        >
          {props.leadingIcon}
        </Icon>
      )}

      <Text
        component="span"
        color={txtColor}
        size="large"
        variant="label"
        className={txtCls}
      >
        {props.children}
      </Text>
      {hasTrailingIcon && (
        <Icon
          color={iconColor}
          className={`${props.trailingIconClassName || ''} text-base`}
        >
          {props.trailingIcon}
        </Icon>
      )}
      <div className="absolute inset-0 opacity-0 pointer-events-none bg-on-surface-variant group-hover/chip:opacity-10"></div>
    </div>
  );
};

export default Chip;
