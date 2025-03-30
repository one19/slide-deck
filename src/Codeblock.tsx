import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dracula,
  duotoneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@emotion/react';

type CodeBlockProps = {
  language: string;
  code: string;
  inline?: boolean;
};

export const Codeblock = ({ language, code, inline }: CodeBlockProps) => {
  const theme = useTheme();
  return (
    <SyntaxHighlighter
      language={language}
      style={theme.name === 'light' ? duotoneLight : dracula}
      customStyle={{
        display: inline ? 'inline' : 'block',
        padding: '0.2rem 0.4rem',
        borderRadius: '0.5rem',
      }}
    >
      {code.trim()}
    </SyntaxHighlighter>
  );
};
