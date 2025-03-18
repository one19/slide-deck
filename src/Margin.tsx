import styled from '@emotion/styled';

type MarginProps = {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
};

const Margin = styled.div<MarginProps>`
  ${({ m }) => (m ? `margin: ${m};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
`;

export default Margin;
