import Slide1 from './slides/testSlide.mdx';
import Slide2 from './slides/testSlide2.mdx';
import { Deck } from './Deck';
import { mdxComponents } from './MDXComponents';

const App = () => (
  <>
    <Deck
      slides={[
        <Slide1 components={mdxComponents} key="1" />,
        <Slide2 components={mdxComponents} key="2" />,
      ]}
    />
  </>
);

export default App;
