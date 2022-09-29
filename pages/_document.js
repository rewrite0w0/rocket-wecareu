import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard.css"
        />
        <title>🚀🚀위케어유🚀🚀</title>
        <meta name="description" content="위케어유" />
        <meta name="keywords" content="위케어유, 혈당계, 헬스케어, 건강건강" />
        <meta name="author" content="LAMEDITECH" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
