import { FormEvent } from 'react';
import TextField, { type TextFieldProps } from '@src/TextField';
import { Color } from '@src/types';
import { generateCls } from './helpers';

export type CustomFieldProps = {
  onChange: (value: FormFieldValue, key: string) => void;
  itemKey: string;
  value: FormFieldValue;
};

export type FormFieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [k: string]: FormFieldValue };

export type FormField = {
  key: string;
  Field?: React.ComponentType<CustomFieldProps> | React.FC<CustomFieldProps>;
} & Omit<TextFieldProps, 'onChange'>;

export type FormProps<T> = {
  fields: FormField[];
  value: T;
  onChange: (key: keyof T, value: FormFieldValue) => void;
  onSubmit: () => void;
  className?: string;
  color?: Color;
} & React.PropsWithChildren;

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

  const handleChange = (key: keyof T, value: FormFieldValue) => {
    onChange(key, value);
  };

  const cls = generateCls(className);

  return (
    <form className={cls} onSubmit={handleSubmit}>
      {fields.map((item) => {
        const { key, ...fieldProps } = item;
        const value = getValue(item.key);

        if (item.Field) {
          return (
            <item.Field
              key={item.key}
              itemKey={item.key}
              onChange={(fieldValue) => handleChange(item.key, fieldValue)}
              value={value}
            />
          );
        }

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
