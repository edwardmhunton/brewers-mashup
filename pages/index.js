import React, { useState, useEffect } from "react";
import App from "../src/App";

function index({ breweries }) {
  return <App pageName="Home" breweries={breweries} />;
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.openbrewerydb.org/breweries?per_page=50&by_state=new_york"
  );
  const breweries = await res.json();
  return {
    props: {
      breweries,
    },
  };
}

export default index;
