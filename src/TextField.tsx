import React, { useState, HTMLInputTypeAttribute } from 'react';

import { groupFocusBorderColor, groupFocusTextColor } from './css-classes';
import { Color, Size } from './types';
import { Button } from '@src/Button';
import Icon, { IconProps } from './Icon';
import Text from './Text';

const hasValueCls = 'has-value';

const InputComponent = (props: any) => {
  if (props.FieldComponent) {
    return <props.FieldComponent {...props} />;
  }
  const comp = props.multiple ? 'textarea' : 'input';
  const data = { ...props.propsData };
  if (comp == 'textarea') {
    data.className = `${data.className || ''} resize-none !py-4`;
  }

  return React.createElement(comp, data);
};
const getSize = (size: Size) => {
  const s = { small: 'small', medium: 'medium', large: 'large' };
  return s[size] || (s.medium as Size);
};

type CreateClassProps = TextFieldProps & {
  size: Size;
  hasIcon: boolean;
  focused: boolean;
  hasTrailingIcon: boolean;
};

const createOuterClassName = (p: CreateClassProps) => {
  const s = p.suffix ? ' has-suffix' : '';
  const pf = p.prefix ? ' has-prefix' : '';
  const n = p.label ? '' : ' no-label';
  const e = p.error ? ' has-error' : '';
  const h = p.hasIcon ? ' has-icon' : '';
  const f = p.focused ? ' focused' : '';
  const d = p.disabled ? ' disabled' : '';
  const v = Boolean(p.value) ? ' has-value' : '';
  const c = p.className || '';
  const t = p.hasTrailingIcon ? ' has-traling-icon' : '';
  const o = p.variant === 'outlined' ? ' outlined' : ' filled';

  const cls = 'group m3-textfield w-full flex flex-col';
  return `${cls} ${e}${h}${f}${d}${v}${t}${o}${n}${s}${pf} ${c}`;
};

const createFilledClassName = (p: CreateClassProps) =>
  `rounded-t-lg bg-surface-container-highest border-b group-[.has-error]:border-error border-on-surface-variant group-[.focused]:border-b-2 ${
    groupFocusBorderColor[p.color!]
  }`;
const createContainerClass = (p: CreateClassProps) => {
  const c = p.contentClassName || '';
  const filledCls = p.variant === 'filled' ? createFilledClassName(p) : '';

  const containerDefaultCls = `m3-textfield-content transition-all duration-200 ${filledCls} flex relative pt-[6px] [&.m3-textfield-small]:h-[46px] [&.m3-textfield-medium]:h-[56px]`;
  return `${containerDefaultCls} ${c}  m3-textfield-${p.size}`;
};

const createInputClass = (p: CreateClassProps) => {
  const inputCls = {
    small: 'text-sm group-[.has-icon]:pl-1',
    medium: 'text-base group-[.has-icon]:pl-1.5',
  };
  const textFieldFDefaultCls =
    'm3-textfield-input h-full :focus-text-on-surface font-main w-full bg-transparent outline-none py-2 px-4 disabled:text-on-surface/40 placeholder:text-transparent group-[.has-prefix]:placeholder:text-on-surface-variant group-[.no-label]:placeholder:text-on-surface-variant focus:placeholder:text-on-surface-variant';

  const h = Boolean(p.value) ? hasValueCls : '';

  return `${textFieldFDefaultCls} ${p.inputClassName || ''} ${
    inputCls[p.size as 'medium']
  } ${h}`;
};

const createLabelClass = (p: CreateClassProps) => {
  const s = p.size as 'medium';
  const focusLabelColor = groupFocusTextColor[p.color!];
  const labelDefaultCls =
    'text-on-surface-variant transition-all duration-200 top-0 left-0 pointer-events-none absolute  group-[.disabled]:text-on-surface/40 group-[.focused.filled]:translate-y-[0px] group-[.focused]:translate-y-[-5px] group-[.focused]:translate-x-[10px] group-[.has-error]:text-error';

  const labelFocus = {
    small: 'group-[.has-prefix]:scale-75 group-[.focused]:scale-75',
    medium: 'group-[.has-prefix]:scale-90 group-[.focused]:scale-90',
  };
  const hasValueCls = {
    small:
      'group-[.has-prefix.filled]:translate-y-[0px] group-[.has-prefix]:translate-y-[-3px] group-[.has-prefix]:translate-x-[13px] group-[.has-value.filled]:translate-y-[0px] group-[.has-value]:translate-y-[-3px] group-[.has-value]:translate-x-[12px] group-[.has-value]:scale-75 group-[.focused]:translate-y-[-3px] group-[.focused]:translate-x-[13px]',

    medium:
      'group-[.has-prefix.filled]:translate-y-[0px] group-[.has-prefix]:translate-y-[-5px] group-[.has-prefix]:translate-x-[10px] group-[.has-value.filled]:translate-y-[0px] group-[.has-value]:translate-y-[-5px] group-[.has-value]:translate-x-[10px] group-[.has-value]:scale-90',
  };

  const labelCls = {
    small: 'translate-x-[15px] translate-y-[14px]',
    medium: 'translate-x-[15px] translate-y-[19px]',
  };

  const labelHasIconCls = {
    small: 'translate-x-[36px]',
    medium: 'translate-x-[40px]',
  };
  const lblIconCls = p.hasIcon ? labelHasIconCls[s] : '';

  return `${labelDefaultCls} ${focusLabelColor} ${labelFocus[s]} ${labelCls[s]} ${hasValueCls[s]} ${lblIconCls}`;
};

const createIconClass = (p: CreateClassProps) => {
  const d = 'flex px-2 items-center justify-end';
  const cls = {
    small: 'w-8',
    medium: 'w-9',
  };
  return `${d} ${cls[p.size as 'medium']}`;
};

export type TextFieldProps = {
  label?: string;
  onKeyDown?: (
    event: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onKeyUp?: (
    event: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChange: (
    value: any,
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: () => void;
  value?: any;
  type?: HTMLInputTypeAttribute;
  attrs?: any;
  className?: string;
  contentClassName?: string;
  inputClassName?: string;
  variant?: 'outlined' | 'filled';
  color?: Color;
  labelClassName?: string;
  disabled?: boolean;
  multiple?: boolean;
  placeholder?: string;
  icon?: string;
  iconVariant?: IconProps['variant'];
  iconClassName?: string;
  size?: Size;
  error?: boolean;
  supportingText?: string;
  supportingTextClassName?: string;
  showClearButton?: boolean;
  clearIconClassName?: string;
  trailingIcon?: string;
  trailingIconClassName?: string;
  onClear?: (value: any) => void;
  outlineClassName?: string;
  prefix?: string;
  suffix?: string;
  FieldComponent?: Function;
  options?: any;
  endAdornment?: (p: AdornmentFieldProps) => any;
  startAdornment?: React.ReactNode;
};
type AdornmentFieldProps = {
  focused: boolean;
};

export const TextField = ({
  attrs = {},
  variant = 'outlined',
  color = 'primary',
  outlineClassName = '',
  supportingTextClassName = '',
  options = {},
  disabled,
  ...props
}: TextFieldProps) => {
  const hasTrailingIcon =
    Boolean(props.error) ||
    props.showClearButton ||
    Boolean(props.trailingIcon);
  const hasSupportingText = Boolean(props.supportingText);
  const size = getSize(props.size!);
  const [focused, setFocused] = useState(false);
  const hasIcon = Boolean(props.icon);

  const isOutlined = variant === 'outlined';
  const focusBorderColor = groupFocusBorderColor[color];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value, event);
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFocused(true);
    if (props.onFocus) {
      props.onFocus(event);
    }
  };
  const handleBlur = () => {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };
  const handleClear = () => {
    props.onChange('', undefined);

    if (props.onClear) {
      props.onClear(props.value);
    }
  };

  const p = {
    ...props,
    focused,
    hasIcon,
    ...{ color, size, variant, disabled, hasTrailingIcon },
  } as CreateClassProps;

  const cls = {
    container: createOuterClassName(p),
    input: createInputClass(p),
    label: createLabelClass(p),
    icon: createIconClass(p),
    content: createContainerClass(p),
  };

  const inputProps = {
    ...attrs,
    type: props.type,
    value: props.value,
    className: cls.input,
    placeholder: props.placeholder,
    disabled,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
  };

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        {hasIcon && (
          <div className={cls.icon}>
            <Icon
              color="on-surface-variant"
              variant={props.iconVariant}
              className={`${props.iconClassName} group-[.disabled]:text-on-surface/40`}
            >
              {props.icon}
            </Icon>
          </div>
        )}
        <Adornment>{props.startAdornment}</Adornment>
        <PrefixSuffix variant="prefix" value={props.prefix} />
        <div className="h-full w-full">
          <InputComponent
            propsData={inputProps}
            multiple={props.multiple}
            FieldComponent={props.FieldComponent}
            options={options}
          />
          <Text
            component="label"
            variant="title"
            size={size as Size}
            className={cls.label}
          >
            {props.label}
          </Text>
        </div>
        <TrailingIcon
          error={props.error}
          onClear={handleClear}
          icon={props.trailingIcon}
          className={props.trailingIconClassName}
          value={props.value}
          showClearButton={props.showClearButton}
          size={size as Size}
          multiple={props.multiple}
          hasTrailingIcon
        />
        <Adornment>
          {props.endAdornment && <props.endAdornment focused={focused} />}
        </Adornment>
        <PrefixSuffix variant="suffix" value={props.suffix} />
        {isOutlined && (
          <fieldset
            className={`break-normal border-outline ${focusBorderColor} group-hover:border-on-surface absolute group-[.focused]:border-2 group-[.focused]:outline-input-active group-[.has-value]:visible pointer-events-none w-full inset-0 top-[-5px] border rounded-md py-0 px-2 group-[.disabled]:border-on-surface/10 group-[.has-error]:border-error ${outlineClassName}`}
          >
            <legend className="invisible w-0 overflow-hidden">
              <span className="text-nowrap">{props.label}</span>
            </legend>
          </fieldset>
        )}
      </div>
      {hasSupportingText && (
        <Text
          variant="body"
          size="small"
          color="on-surface-variant"
          className={`m3-textfield-supporting-text pt-0.5 pl-3 group-[.has-error]:text-error group-[.disabled]:text-on-surface/40  ${supportingTextClassName}`}
        >
          {props.supportingText}
        </Text>
      )}
    </div>
  );
};

export default TextField;

function TrailingIcon(
  props: Pick<
    TextFieldProps,
    'value' | 'error' | 'className' | 'showClearButton' | 'size' | 'multiple'
  > & {
    onClear: () => void;
    icon?: string;
    hasTrailingIcon: boolean;
  },
) {
  if (!props.hasTrailingIcon) {
    return null;
  }
  const cls = `${props.className} !px-1 !py-0`;
  const isClearButton = props.showClearButton && props.value;
  const icon = (() => {
    if (props.icon) {
      return props.icon;
    }
    if (isClearButton) {
      return 'cancel';
    }
    if (props.error) {
      return 'error';
    }
    return null;
  })();

  if (!icon) {
    return null;
  }
  const pos = props.multiple ? '' : 'items-center';

  return (
    <div className={`flex px-1 h-full justify-center ${pos}`}>
      {isClearButton && (
        <Button
          onClick={props.onClear}
          icon={icon}
          className={cls}
          color="on-surface-variant"
          iconButton
        />
      )}
      {props.error && !isClearButton && (
        <Icon
          size={props.size}
          className="px-1"
          fontVariant="title"
          color="error"
        >
          error
        </Icon>
      )}
    </div>
  );
}

function PrefixSuffix(props: { value?: string; variant: 'prefix' | 'suffix' }) {
  if (!props.value) {
    return null;
  }
  const pl = props.variant === 'prefix' ? 'pl-3' : 'pr-3';
  return (
    <div className={`flex flex-col justify-center items-center ${pl}`}>
      <Text
        component="span"
        color="on-surface-variant"
        size="medium"
        variant="body"
      >
        {props.value}
      </Text>
    </div>
  );
}

function Adornment(props: { children?: React.ReactNode }) {
  if (!props.children) {
    return null;
  }
  return <div className="flex h-full justify-center">{props.children}</div>;
}
