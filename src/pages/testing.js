import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Testing = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h3>testing</h3>
        <Link to="/">to home</Link>
      </div>
    </Layout>
  );
};

export default Testing;
