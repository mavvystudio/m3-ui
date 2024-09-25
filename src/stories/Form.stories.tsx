import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Form } from '@src/Form';
import { Button } from '@src/Button';

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
    fields: [],
    value: {},
  },
} satisfies Meta<typeof Form>;

export const Template: StoryObj<typeof Form> = {
  render: (args) => {
    return (
      <Form {...args}>
        <Button color="primary" variant="filled" type="submit">
          Submit
        </Button>
      </Form>
    );
  },
};

export default meta;
