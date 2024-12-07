import * as React from 'react';

import Services from './common/services';

import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <>

      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="This is a description of my page." />
      </Helmet>

      <Services />

    </>
  );
}
