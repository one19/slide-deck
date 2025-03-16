import type { Meta, StoryObj } from '@storybook/react';

const Headings = () => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </>
);
const Lists = () => (
  <>
    <ul>
      <li>Unordered List Item 1</li>
      <li>Unordered List Item 2</li>
      <li>Unordered List Item 3</li>
    </ul>
    <ol>
      <li>Ordered List Item 1</li>
      <li>Ordered List Item 2</li>
      <li>Ordered List Item 3</li>
    </ol>
  </>
);
const OtherText = () => (
  <>
    <p>Paragraph</p>
    <small>Small</small>
    <strong>Strong</strong>
    <em>Emphasis</em>
    <mark>Marked</mark>
    <del>Deleted</del>
    <ins>Inserted</ins>
    <sub>Subscript</sub>
    <sup>Superscript</sup>
    <q>Quote</q>
    <blockquote>Blockquote</blockquote>
    <pre>Preformatted</pre>
    <code>Code</code>
    <abbr title="Abbreviation">Abbr</abbr>
    <a href="#">Link</a>
    <a href="#" download>
      Download
    </a>
    <a href="#" target="_blank">
      External Link
    </a>
    <a href="#" target="_self">
      Internal Link
    </a>
    <a href="#" target="_parent">
      Parent Link
    </a>
    <a href="#" target="_top">
      Top Link
    </a>
    <a href="#" rel="noopener noreferrer">
      No Referrer
    </a>
    <a href="#" rel="nofollow">
      No Follow
    </a>
  </>
);

const ExamplePage = () => (
  <>
    <Headings />
    <Lists />
    <OtherText />
  </>
);

const meta = {
  title: 'Global styles',
  component: ExamplePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExamplePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
