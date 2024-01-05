import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>I'm Dawid</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        Mail <a href="mailto:udawid00@gmail.com">Mail</a>
      </p>
      <p>
        About <Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default IndexPage;
