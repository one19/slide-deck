import { ReactNode } from 'react';
import styled from '@emotion/styled';

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primary};
`;

const SlideTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const SlideContent = styled.div`
  font-size: 1.5rem;
  flex: 1;
`;

type SlideProps = {
  title?: string;
  children: ReactNode;
};

export const Slide = ({ title, children }: SlideProps) => (
  <SlideContainer>
    {title && <SlideTitle>{title}</SlideTitle>}
    <SlideContent>{children}</SlideContent>
  </SlideContainer>
);
