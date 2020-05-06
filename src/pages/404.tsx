import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
      <h2>Page Not Found</h2>
      <h3>We are sorry but the page your were looking for was not found...</h3>
    </div>
  </Layout>
);

export default NotFoundPage;
