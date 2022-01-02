import * as React from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">Back to index page</Link>
    </Layout>
  )
}

export default AboutPage;
