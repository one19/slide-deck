import { useState, useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div<{ isPeeking: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  align-items: center;
  transform: ${({ isPeeking }) =>
    isPeeking ? 'translateY(0)' : 'translateY(-100%)'};
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;

const PEEK_THRESHOLD = 2000;

const HiddenHeader = () => {
  const [isPeeking, setIsPeeking] = useState(false);
  const [_scrollThreshold, setScrollThreshold] = useState(0);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (window.scrollY > 0) return;

      // Clear the previous reset timeout if there was one.
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      // Setup a short timeout to reset the threshold if no additional events occur.
      resetTimeoutRef.current = setTimeout(() => {
        setScrollThreshold(0);
      }, 100); // 100ms debounce

      setScrollThreshold((prev) => {
        const newThreshold = prev + event.deltaY;
        if (newThreshold < -PEEK_THRESHOLD && !isPeeking) {
          setIsPeeking(true);
          return 0;
        } else if (newThreshold > PEEK_THRESHOLD && isPeeking) {
          setIsPeeking(false);
          return 0;
        }
        return newThreshold;
      });
    },
    [isPeeking],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [handleWheel]);

  const handleAnimationSpeed = () => {
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    const originalDuration = computedStyle.animationDuration;

    setIsPeeking(false);
    body.style.animationDuration = '1s';
    setTimeout(() => {
      body.style.animationDuration = originalDuration;
    }, 1000);
  };

  return (
    <HeaderContainer isPeeking={isPeeking}>
      {isPeeking && (
        <>
          <Button onClick={handleAnimationSpeed}>Run Animation</Button>
          <Button onClick={() => setIsPeeking(false)}>x</Button>
        </>
      )}
    </HeaderContainer>
  );
};

export default HiddenHeader;
