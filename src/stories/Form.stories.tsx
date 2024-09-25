import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Form } from '@src/Form';
import { Button } from '@src/Button';
import { TextField } from '..';
import { FormFieldValue, type CustomFieldProps } from '@src/Form/Form';
import { useState } from 'react';

const CustomField = ({ itemKey, onChange, value }: CustomFieldProps) => {
  return (
    <div className="p-8">
      <p>{itemKey}:</p>
      <TextField value={value} onChange={(event) => onChange(event, itemKey)} />
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: 'object',
    },
    fields: {
      control: 'object',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    className: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onSubmit: fn(),
    fields: [
      {
        key: 'fooBar',
        label: 'Foo Bar',
        Field: CustomField,
      },
    ],
    value: {},
  },
} satisfies Meta<typeof Form>;

type FormValue = {
  fooBar: string;
};
export const Template: StoryObj<typeof Form> = {
  render: (args) => {
    const [value, setValue] = useState<FormValue>({ fooBar: '' });
    const handleChange = (key: keyof FormValue, fieldValue: FormFieldValue) => {
      setValue({
        [key]: fieldValue as string,
      });
    };
    return (
      <Form<FormValue> {...args} onChange={handleChange} value={value}>
        <Button color="primary" variant="filled" type="submit">
          Submit
        </Button>
        <p>foobar: {value.fooBar}</p>
      </Form>
    );
  },
};

export default meta;
