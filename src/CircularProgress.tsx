import { stroke } from './css-classes';
import { Color, Size } from './types';

export type CircularProgressProps = {
  className?: string;
  indeterminate?: boolean;
  color?: Color;
  size?: Size;
  value?: number;
};

const sizes = {
  small: {
    props: {
      cx: 15,
      cy: 15,
      r: 13.5,
      strokeWidth: 4,
      strokeDasharray: 84.822,
    },
    size: 30,
    cls: 'w-[30px] h-[30px]',
    name: 'small',
  },
  medium: {
    props: {
      cx: 25,
      cy: 25,
      r: 22.5,
      strokeWidth: 5,
      strokeDasharray: 141.37,
    },
    size: 50,
    cls: 'w-[50px] h-[50px]',
    name: 'medium',
  },
  large: {
    props: {
      cx: 35,
      cy: 35,
      r: 31.5,
      strokeWidth: 7,
      strokeDasharray: 197.918,
    },
    size: 70,
    cls: 'w-[70px] h-[70px]',
    name: 'large',
  },
};

export const CircularProgress = ({
  size = 'medium',
  ...props
}: CircularProgressProps) => {
  const selectedSize = sizes[size] || sizes.medium;
  const i = props.indeterminate ? ' indeterminate' : '';

  const cls = `m3-circular-progress${i} ${selectedSize.name} ${selectedSize.cls}`;

  const p = props.value ? getNum(props.value, selectedSize.props.r) : 0;

  const containerAnimation = props.indeterminate ? 'animate-spin' : '';
  const pathAnimation = props.indeterminate ? 'animate-stroke-dash' : '';
  const strokeColor = stroke[props.color || 'primary'];

  return (
    <div className={cls}>
      <svg className={`circular ${containerAnimation} ${selectedSize.cls}`}>
        <circle
          className={`path ${strokeColor} ${pathAnimation}`}
          fill="none"
          strokeDashoffset={p}
          {...selectedSize.props}
        ></circle>
      </svg>
    </div>
  );
};

export default CircularProgress;

function getNum(val: number, r: number) {
  if (val === 0) {
    return 0;
  }
  const c = Math.PI * (r * 2);
  return ((100 - val) / 100) * c;
}
