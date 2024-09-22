import { CSSProperties, PropsWithChildren } from 'react';

import { ButtonVariant, Color, Size } from './types';
import {
  createElevated,
  createFilled,
  createOutlined,
  getDirection,
  getTextColor,
} from './utils';
import { Icon, IconProps } from './Icon';
import ButtonText from './ButtonText';
import ButtonState from './ButtonState';

export type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: Color;
    activeColor?: Color;
    size?: Size;
    vertical?: boolean;
    reversed?: boolean;
    className?: string;
    variant?: ButtonVariant;
    style?: CSSProperties;
    textClassName?: string;
    iconClassName?: string;
    stateClassName?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: string;
    iconVariant?: IconProps['variant'];
    buttonAttrs?: any;
    textAttrs?: any;
    iconButton?: boolean;
    selected?: boolean;
    selectable?: boolean;
    RenderComponent?: any;
  }
>;

const createButtonPaddingSize = (
  props: ButtonProps,
  variant: ButtonProps['variant'],
  size:
    | Size
    | 'icon-small'
    | 'icon-medium'
    | 'icon-large'
    | 'fab-small'
    | 'fab-medium'
    | 'fab-large',
) => {
  const p = {
    small: 'py-1 px-3',
    medium: 'py-2 px-4',
    large: 'py-3 px-5',
    'icon-small': 'p-0 h-[30px] w-[30px]',
    'icon-medium': 'py-2 px-3',
    'icon-large': 'py-3 px-4',
    'fab-small': 'py-2 px-3',
    'fab-medium': 'py-3 px-4',
    'fab-large': 'py-4 px-5',
  };
  const target = (() => {
    if (variant === 'fab') {
      return `fab-${size}`;
    }
    if (props.iconButton) {
      return `icon-${size}`;
    }
    return size;
  })();
  return p[target as 'small'] || p.medium;
};

const buttonRadius = {
  small: 'rounded-2xl',
  medium: 'rounded-3xl',
  large: 'rounded-4xl',
  full: 'rounded-full',
  'fab-small': 'rounded-lg',
  'fab-medium': 'rounded-xl',
  'fab-large': 'rounded-2xl',
};

const disabledCls = 'bg-on-surface/10 text-on-surface/40';

const createFab = (props: ButtonProps) => {
  const cls = createFilled(props.color);
  return `${cls} shadow-lg hover:shadow-xl bottom-0 right-0 mb-4 mr-4`;
};

const createDefault = (props: ButtonProps) => {
  if (props.disabled) {
    return 'text-on-surface/40';
  }
  return getTextColor(props.color);
};

const createRadius = (
  props: ButtonProps,
  variant: ButtonProps['variant'],
  size: Size,
) => {
  const target = (() => {
    if (variant === 'fab') {
      return `fab-${size}`;
    }
    if (props.iconButton) {
      return 'full';
    }
    return size;
  })();
  return buttonRadius[target as 'small'];
};

const applyDisabled = (props: ButtonProps, cls: string) => {
  if (props.disabled) {
    return disabledCls;
  }
  return cls;
};

const createVariantCls = (
  variant: ButtonProps['variant'],
  props: ButtonProps,
) => {
  const { color } = props;
  if (variant === 'elevated') {
    return applyDisabled(props, createElevated(color));
  }
  if (variant === 'filled') {
    return applyDisabled(props, createFilled(color));
  }
  if (variant === 'outlined') {
    return applyDisabled(props, createOutlined(color));
  }
  if (variant === 'fab') {
    return applyDisabled(props, createFab(props));
  }
  if (variant === 'text') {
    return createDefault(props);
  }
  return createDefault(props);
};

const cls =
  'm3-button gap-1.5 group transition-all duration-150 flex justify-center items-center';
export const Button = ({
  variant = 'text',
  size = 'medium',
  textClassName = '',
  iconClassName = '',
  stateClassName = '',
  className = '',
  buttonAttrs = {},
  textAttrs = {},
  ...props
}: ButtonProps) => {
  const hasIcon = props.icon !== undefined;
  const direction = getDirection(props.vertical, props.reversed);
  const padding = createButtonPaddingSize(props, variant, size);
  const radius = createRadius(props, variant, size);
  const minWidth = props.iconButton ? '' : 'min-w-100';
  const pos = variant === 'fab' ? 'absolute' : 'relative';
  const buttonCls = `${cls} ${radius} ${padding} ${direction} ${pos} ${className} ${minWidth}`;
  const renderedCls = createVariantCls(variant, props);
  const containerCls = `${buttonCls} ${renderedCls}`;
  const iconCls = `transition-all relative z-1 ${iconClassName}`;

  return (
    <button
      {...buttonAttrs}
      style={props.style}
      className={containerCls}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {hasIcon && (
        <Icon
          fontVariant="title"
          size={size}
          className={iconCls}
          variant={props.iconVariant}
        >
          {props.icon}
        </Icon>
      )}
      <ButtonText
        className={textClassName}
        size={size}
        iconButton={props.iconButton}
      >
        {props.children}
      </ButtonText>
      <ButtonState
        radius={radius}
        variant={variant}
        color={props.color}
        className={stateClassName}
      />
      {Boolean(props.RenderComponent) && props.RenderComponent}
    </button>
  );
};

export default Button;
