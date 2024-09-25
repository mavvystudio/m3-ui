import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@src/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: 'Ui/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'text', 'outlined', 'fab'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    textClassName: {
      control: 'text',
    },
    iconClassName: {
      control: 'text',
    },
    stateClassName: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), color: 'tertiary', children: 'Default' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary Button',
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Button',
  },
};
