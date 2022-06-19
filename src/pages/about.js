import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { globalStateContext } from "../globalProvider";

const AboutPage = () => {

  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <Link to="/">Back to index page</Link>
      <br />
      <globalStateContext.Consumer>
        {({ counter, increase, decrease }) => (<>
          <button onClick={decrease}> -1 </button>
          {counter}
          <button onClick={increase}> +1 </button>
          {counter % 2 > 0 && '=== ODD ==='}
        </>)}
      </globalStateContext.Consumer>

      <hr />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default AboutPage;
