import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Head() {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
