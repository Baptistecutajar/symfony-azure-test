import type { Meta, StoryObj } from '@storybook/react';

import { UiButton } from './UiButton';

const meta: Meta<typeof UiButton> = {
  title: 'Atoms/Button',
  component: UiButton,
};
export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    children: 'YES',
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    children: 'YES',
    color: 'secondary',
    variant: 'outlined',
  },
};
