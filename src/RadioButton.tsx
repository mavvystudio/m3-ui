import { Radio, RadioProps } from './Radio';

import Text from './Text';

export type RadioButtonProps = Pick<
  RadioProps,
  'className' | 'selected' | 'color' | 'disabled'
> & {
  label: string;
  onClick?: (event: React.MouseEvent) => void;
  radioClassName?: string;
  textClassName?: string;
};

export const RadioButton = ({ className = '', ...props }: RadioButtonProps) => {
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

  const s = props.selected ? ' selected' : '';
  const d = props.disabled ? ' disabled' : '';
  const cls = `${className}${s}${d} m3-radio-button group/radio-button flex items-center gap-x-3 cursor-pointer`;

  return (
    <div className={cls} onClick={handleClick}>
      <Radio
        className={props.radioClassName}
        color={props.color}
        selected={props.selected}
        disabled={props.disabled}
      />
      <Text className={props.textClassName}>{props.label}</Text>
    </div>
  );
};

export default RadioButton;
