import { Slide } from './Slide';
import { Deck } from './Deck';

const App = () => (
  <Deck
    slides={[
      <Slide key="1" title="Intro">
        Hello world, welcome to the presentation!
      </Slide>,
      <Slide key="2" title="Content">
        Quick and easy slide creation with Emotion and Vite.
      </Slide>,
      <Slide key="3" title="End">
        Thank you!
      </Slide>,
    ]}
  />
);

export default App;
