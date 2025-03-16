import type { Meta, StoryObj } from '@storybook/react';
import { Codeblock } from './Codeblock';

const meta: Meta<typeof Codeblock> = {
  title: 'Components/Codeblock',
  component: Codeblock,
};

export default meta;

type Story = StoryObj<typeof Codeblock>;

const rainbowCSS = `
  .rainbow {
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      cyan,
      blue,
      violet
    );
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
    font-size: 3rem;
  }
`;

export const RainbowCSS: Story = {
  args: {
    language: 'css',
    code: rainbowCSS,
  },
};

const someTS = `
type SomeType = {
  name: string;
  age: number;
};

const someFunction = (arg: SomeType): void => {
  console.log(arg);
};

someFunction({ name: 'Alice', age: 42 });
`;

export const Ts: Story = {
  args: {
    language: 'tsx',
    code: someTS,
  },
};
