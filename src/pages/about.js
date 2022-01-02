import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">Back to index page</Link>
      <br />
      {data.site.siteMetadata.title}
      <hr />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default AboutPage;
