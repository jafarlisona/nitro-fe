import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Services from "../components/Services";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
        <link
          rel="shortcut icon"
          href="https://muffingroup.com/blog/wp-content/uploads/2019/03/owl_favicon.jpg"
          type="image/x-icon"
        />
      </Helmet>
      <Services />
    </HelmetProvider>
  );
}

export default Home;
