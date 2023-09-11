import { borderColors } from './css-classes';
import { Color, Size } from './types';
import { bgColor } from './utils';

export type RadioProps = {
  className?: string;
  selectedClassName?: string;
  color?: Color;
  selected: boolean;
  size?: Size;
  disabled?: boolean;
};

const sizes = {
  small: 'h-3 w-3 p-px',
  medium: 'h-5 w-5 p-0.5',
  large: 'h-7 w-7 p-1',
};

const createCls = (className: string, props: RadioProps) => {
  const defaultCls =
    'm3-radio group/radio rounded-full border-2 cursor-pointer relative';
  const s = sizes[props.size || 'medium'] || sizes.medium;
  const b = props.selected
    ? borderColors[props.color || 'on-surface-variant']
    : borderColors['on-surface-variant'];
  return `${defaultCls} ${className} ${s} ${b}`;
};

const createSelectedCls = ({
  selectedClassName = '',
  ...props
}: RadioProps) => {
  if (!props.selected) {
    return '';
  }
  const b = bgColor(props.color || 'on-surface-variant');
  const cls = 'w-full h-full rounded-full';

  return `${selectedClassName} ${cls} ${b}`;
};

export const Radio = ({ className = '', ...props }: RadioProps) => {
  const cls = createCls(className, props);
  const selectedCls = createSelectedCls(props);

  return (
    <div className={cls}>
      {props.selected && <div className={selectedCls}></div>}
      <div className="opacity-0 group-hover/radio-button:opacity-10 rounded-full scale-[2] bg-on-surface w-full h-full pointer-events-none absolute inset-0"></div>
    </div>
  );
};

export default Radio;
