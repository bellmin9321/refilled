import Head from 'next/head';
import React from 'react';

interface IndexPageProp {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

function IndexPage({ title, description, url, image }: IndexPageProp) {
  return (
    <Head>
      <title>리필드</title>
      <meta property="og:title" content={title || 'Meetion'} />
      <meta
        name="description"
        content={description || 'Refilled clone project'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || 'http://localhost:3001/'} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="bellmin" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <link rel="icon" />
    </Head>
  );
}

export default IndexPage;
