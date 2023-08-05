// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About Me"}>
        <div className="main">
          <p>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </p>
        </div>
        <div className="info">
          <h3>Some things about me.</h3>
          <ul>
            <li>Im a Junior at Fresno State</li>
            <li>I love to learn new things</li>
            <li>I love to crochet</li>
          </ul>
        </div>
      </Layout>
    </main>
  );
};

export const Head = () => <title>About Me</title>;
// Step 3: Export your component
export default AboutPage;
