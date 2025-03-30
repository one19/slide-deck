import { MDXProvider } from '@mdx-js/react';
import Slide1 from './slides/testSlide.mdx';
import Slide2 from './slides/testSlide2.mdx';
import { Deck } from './Deck';
import { mdxComponents } from './MDXComponents';

const App = () => (
  <MDXProvider components={mdxComponents}>
    <Deck
      slides={[
        <Slide1 key="1" />,
        <Slide2 key="2" />,
        // more slides to come!
        // TODO: support [<asides>, syntax]
      ]}
    />
  </MDXProvider>
);

export default App;
