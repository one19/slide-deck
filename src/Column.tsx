import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
`;

export const Column = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -0.5rem; // Adjust spacing as needed
    bottom: 0;
    width: 1px;
    background: #ccc; // Divider color
  }
`;
