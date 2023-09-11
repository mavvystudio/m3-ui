import { ButtonVariant, Color } from './types';
import { bgColor } from './utils';

type ButtonStateProps = {
  className?: string;
  variant: ButtonVariant;
  color?: Color;
  radius: string;
};

const createStateColor = (variant: ButtonVariant, color?: Color) =>
  variant === 'outlined' || variant === 'text' || !variant
    ? bgColor(color)
    : 'bg-white';
const stateCls =
  'gb-button-state absolute transition-all duration-300 opacity-0 inset-0 group-disabled:opacity-0 group-hover:opacity-08 group-active:opacity-30';

const ButtonState = (props: ButtonStateProps) => {
  const stateColor = createStateColor(props.variant, props.color);

  return (
    <div
      className={`${props.className} ${stateCls} ${stateColor} ${props.radius}`}
    ></div>
  );
};

export default ButtonState;
