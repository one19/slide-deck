import type { Meta, StoryObj } from '@storybook/react';
import { Deck } from './Deck';
import { Slide } from './Slide';

const meta: Meta<typeof Deck> = {
  title: 'Components/Deck',
  component: Deck,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Deck>;

export const Default: Story = {
  args: {
    slides: [
      <Slide key="slide-1" title="Slide One">
        This is the first slide.
      </Slide>,
      <Slide key="2" title="Slide Two">
        Content for the second slide.
      </Slide>,
      <Slide key="3">Slide without title.</Slide>,
    ],
  },
};
