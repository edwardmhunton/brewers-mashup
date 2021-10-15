import React, { useContext } from "react";
import { BrewerContext, ConfigContext } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapWrapper } from "../src/MapWrapper";

import { BreweryNavItems } from "./BreweryNavItems";

function Home() {
  const context = useContext(BrewerContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <BreweryNavItems />
          </div>
          <div className="col-md">
            <h2>Brewers 'Mash' Up / New York State</h2>
            <MapWrapper />
            <h3>{context.brewer.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
