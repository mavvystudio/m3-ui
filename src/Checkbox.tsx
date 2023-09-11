import Button from './Button';
import { Color } from './types';

export type CheckboxProps = {
  color?: Color;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  iconClassName?: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  indeterminate?: boolean;
};

const handleColor = (checked: boolean, color?: Color, error?: boolean) => {
  if (error) {
    return 'error';
  }
  return checked ? color : 'on-surface';
};

const handleIcon = (checked: boolean, indeterminate?: boolean) => {
  const icon = indeterminate ? 'indeterminate_check_box' : 'check_box';
  return checked ? icon : 'check_box_outline_blank';
};

export const Checkbox = ({
  iconClassName = '',
  className = '',
  disabled,
  ...props
}: CheckboxProps) => {
  const icon = handleIcon(props.checked, props.indeterminate);
  const color = handleColor(props.checked, props.color, props.error);

  const handleClick = () => {
    props.onChange(!props.checked);
  };

  const iconCls = props.checked ? 'm3-icon-filled' : '';

  return (
    <Button
      className={`self-start ${className}`}
      iconClassName={`text-xl transition-none ${iconCls} ${iconClassName}`}
      color={color}
      onClick={handleClick}
      icon={icon}
      RenderComponent={
        <input
          onChange={() => {}}
          type="checkbox"
          checked={props.checked}
          name={props.name}
          className="absolute opacity-0 pointer-events-none"
          disabled={disabled}
        />
      }
      disabled={disabled}
      iconButton
    />
  );
};

export default Checkbox;
