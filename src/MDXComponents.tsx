import { Codeblock } from './Codeblock';
import { Slide } from './Slide';

export const mdxComponents = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <Slide>{children}</Slide>
  ),
  code: ({
    className,
    children,
    ...props
  }: {
    className?: string;
    children: string;
  }) => {
    const language = className?.replace(/language-/, '') ?? 'text';

    return (
      <Codeblock
        {...props}
        language={language}
        code={children.trim()}
        inline={!className}
      />
    );
  },
};
