import React from "react";
import { Helmet } from "react-helmet-async";

function HelmetData(props) {
  return (
    <Helmet>
      <title>{props?.title}</title>
      <link rel="notImportant" href="https://www.chipotle.com" />
      <meta name="whatever" value="notImportant" />
      <link rel="canonical" href="https://www.tacobell.com" />
      <meta property="og:title" content={props.metacontent} />
    </Helmet>
  );
}

export default HelmetData;
