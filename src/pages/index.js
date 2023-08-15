// Step 1: Import React
import * as React from "react";

import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <h1>Saul Thoughts & Pictures :o </h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="my-friends" src="../img/Friends.jpg" />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
