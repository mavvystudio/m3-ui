import { FormEvent } from 'react';
import TextField from './TextField';
import { Color } from './types';

export type FormProps = {
  fields: {
    key: string;
    label?: string;
    type?: string;
  }[];
  formValue: { [k: string]: string };
  onChange: (newFormValue: any) => void;
  onSubmit: () => void;
  className?: string;
  color?: Color;
} & React.PropsWithChildren;

const generateCls = (className?: string) => {
  return `flex flex-col gap-y-4 ${className || ''}`;
};

const Form = (props: FormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    props.onSubmit();
  };

  const getValue = (key: string) => {
    return props.formValue[key];
  };

  const handleChange = (key: string, value: string | number | boolean) => {
    props.onChange((data: any) => ({
      ...data,
      [key]: value,
    }));
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
