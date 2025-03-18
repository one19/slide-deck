import styled from '@emotion/styled';

type AlignerProps = {
  align?: 'left' | 'center' | 'right';
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

const Aligner = styled.div<AlignerProps>`
  text-align: ${({ align = 'left' }) => align};
  ${({ left, right, top, bottom }) =>
    left || right || top || bottom ? 'position: absolute;' : ''}
  ${({ left }) => (left ? `left: ${left};` : '')}
  ${({ right }) => (right ? `right: ${right};` : '')}
  ${({ top }) => (top ? `top: ${top};` : '')}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : '')}
`;

export default Aligner;
