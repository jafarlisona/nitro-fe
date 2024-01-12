import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AddForm from "../components/AddForm";

function Add() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Add Page</title>
        <link
          rel="shortcut icon"
          href="https://muffingroup.com/blog/wp-content/uploads/2019/03/owl_favicon.jpg"
          type="image/x-icon"
        />
      </Helmet>
      <AddForm />
    </HelmetProvider>
  );
}

export default Add;
