import type { Meta, StoryObj } from '@storybook/react';
import { Slide } from './Slide';

const meta: Meta<typeof Slide> = {
  title: 'Components/Slide',
  component: Slide,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const Default: Story = {
  args: {
    children: 'This is an example slide content rendered with Emotion themes.',
  },
};
