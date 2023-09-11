import { useEffect } from 'react';
import Button from './Button';
import { bg } from './css-classes';
import Text from './Text';
import { Color } from './types';

export type SnackbarProps = {
  className?: string;
  color?: Color;
  accentColor?: Color;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  duration?: number;
  centered?: boolean;
  action?: {
    text: string;
    fn: () => void;
  };
  showCloseIcon?: boolean;
};

const createRootCls = (
  { className = '', ...props }: SnackbarProps,
  color: Color,
) => {
  const c = bg[color];
  const pos = props.centered ? 'm3-fixed-h-center' : 'left-6';
  const cls =
    'm3-snackbar group/snackbar rounded-lg flex items-center justify-between fixed  bottom-6 min-h-[48px] pl-[16px] pr-[8px] min-w-[300px]';

  return `${cls} ${c} ${pos} ${className}`;
};

export const Snackbar = (props: SnackbarProps) => {
  useEffect(() => {
    if (props.open && props.duration) {
      const t = setTimeout(() => props.onClose(), props.duration);
      return () => clearTimeout(t);
    }
  }, [props.open]);

  if (!props.open) {
    return null;
  }
  const color = props.color || 'inverse-surface';
  const cls = createRootCls(props, color);
  const hasAction = Boolean(props.action);
  const inverseColor =
    color?.indexOf('on-') === 0 ? color.replace('on-', '') : `on-${color}`;

  return (
    <div className={cls}>
      <Text color={inverseColor as Color}>{props.children}</Text>
      <div className="flex">
        {hasAction && (
          <Button
            className="!min-w-0"
            color={props.accentColor}
            onClick={props.action?.fn}
          >
            {props.action?.text}
          </Button>
        )}
        {props.showCloseIcon && (
          <Button
            onClick={props.onClose}
            color={inverseColor as Color}
            icon="close"
            iconButton
          ></Button>
        )}
      </div>
    </div>
  );
};

export default Snackbar;
