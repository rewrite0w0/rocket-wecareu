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
        <title>ππμμΌμ΄μ ππ</title>
        <meta name="description" content="μμΌμ΄μ " />
        <meta name="keywords" content="μμΌμ΄μ , νλΉκ³, ν¬μ€μΌμ΄, κ±΄κ°κ±΄κ°" />
        <meta name="author" content="LAMEDITECH" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
