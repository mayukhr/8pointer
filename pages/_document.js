import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <html lang="en">
            <Head>
                <title>8pointer!</title>
                <meta name="description" content="Story pointing app for agile development" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
      )
    }
  }
  
  export default MyDocument;