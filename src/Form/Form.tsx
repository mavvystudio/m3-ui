import { FormEvent } from 'react';
import TextField, { type TextFieldProps } from '@src/TextField';
import { Color } from '@src/types';

export type FormFieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [k: string]: FormFieldValue };

export type FormField = {
  key: string;
} & Omit<TextFieldProps, 'onChange'>;

export type FormProps<T> = {
  fields: FormField[];
  value: T;
  onChange: (key: string, value: FormFieldValue) => void;
  onSubmit: () => void;
  className?: string;
  color?: Color;
} & React.PropsWithChildren;

const generateCls = (className?: string) => {
  return `flex flex-col gap-y-4 ${className || ''}`;
};

export const Form = <T extends { [k: string]: FormFieldValue }>({
  onSubmit,
  children,
  fields,
  value,
  onChange,
  color,
  className,
}: FormProps<T>) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit();
  };

  const getValue = (key: string) => {
    return value[key];
  };

  const handleChange = (key: string, value: FormFieldValue) => {
    onChange(key, value);
  };

  const cls = generateCls(className);

  return (
    <form className={cls} onSubmit={handleSubmit}>
      {fields.map((item) => {
        const { key, ...fieldProps } = item;
        const value = getValue(item.key);

        return (
          <TextField
            color={color}
            {...fieldProps}
            key={item.key}
            onChange={(event) => handleChange(item.key, event)}
            value={value}
          />
        );
      })}
      {children}
    </form>
  );
};

export default Form;
