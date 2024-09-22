import { FormEvent } from 'react';
import TextField from '../TextField';
import { Color } from '../types';

type Value = string | number | boolean;

export type FormProps = {
  fields: {
    key: string;
    label?: string;
    type?: string;
  }[];
  value: { [k: string]: string };
  onChange: (key: string, value: Value) => void;
  onSubmit: () => void;
  className?: string;
  color?: Color;
} & React.PropsWithChildren;

const generateCls = (className?: string) => {
  return `flex flex-col gap-y-4 ${className || ''}`;
};

export const Form = (props: FormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    props.onSubmit();
  };

  const getValue = (key: string) => {
    return props.value[key];
  };

  const handleChange = (key: string, value: Value) => {
    props.onChange(key, value);
  };

  const cls = generateCls(props.className);

  return (
    <form className={cls} onSubmit={handleSubmit}>
      {props.fields.map((item) => {
        const { key, ...fieldProps } = item;
        const value = getValue(item.key);

        return (
          <TextField
            color={props.color}
            {...fieldProps}
            key={item.key}
            onChange={(event) => handleChange(item.key, event)}
            value={value}
          />
        );
      })}

      {props.children}
    </form>
  );
};

export default Form;
