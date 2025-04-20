import { ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import BackgroundCircles from './Background';

const DeckContainer = styled.div`
  box-sizing: border-box;
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

type DeckProps = {
  slides: ReactElement[];
};

export const Deck = ({ slides }: DeckProps) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () =>
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <DeckContainer>
      <BackgroundCircles currentSlide={current} totalSlides={slides.length} />
      {slides[current]}
      <Nav>
        <button onClick={handlePrev} disabled={current === 0}>
          ← Prev
        </button>
        <span>
          {current + 1}/{slides.length}
        </span>
        <button onClick={handleNext} disabled={current === slides.length - 1}>
          Next →
        </button>
      </Nav>
    </DeckContainer>
  );
};
