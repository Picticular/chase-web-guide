import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="scroll-smooth bg-black scrollbar scrollbar-track-black scrollbar-thumb-picticular-purple hover:scroll-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
