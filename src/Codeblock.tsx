import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dracula,
  duotoneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div`
  border-radius: 0.5rem;
  overflow: auto;
`;

type CodeBlockProps = {
  language: string;
  code: string;
};

export const Codeblock = ({ language, code }: CodeBlockProps) => {
  const theme = useTheme();
  return (
    <Container>
      <SyntaxHighlighter
        language={language}
        style={theme.name === 'light' ? duotoneLight : dracula}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </Container>
  );
};
