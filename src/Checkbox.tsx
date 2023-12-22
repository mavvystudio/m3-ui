import Button from './Button';
import Text from './Text';
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
  label?: string;
  textClassName?: string;
  textComponent?: string;
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
  const hasLabel = Boolean(props.label);

  const handleClick = () => {
    props.onChange(!props.checked);
  };

  const iconCls = props.checked ? 'm3-icon-filled' : '';

  return (
    <div
      className={`m3-checkbox flex cursor-pointer items-center self-start ${className}`}
      onClick={handleClick}
    >
      {hasLabel && (
        <Text component={props.textComponent} className={props.textClassName}>
          {props.label}
        </Text>
      )}
      <Button
        iconClassName={`m3-checkbox-icon text-xl transition-none ${iconCls} ${iconClassName}`}
        color={color}
        icon={icon}
        RenderComponent={
          <input
            onChange={() => {}}
            type="checkbox"
            checked={props.checked}
            name={props.name}
            className="m3-checkbox-input absolute opacity-0 pointer-events-none"
            disabled={disabled}
          />
        }
        disabled={disabled}
        iconButton
      />
    </div>
  );
};

export default Checkbox;
