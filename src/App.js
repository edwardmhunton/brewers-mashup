import React, { useState } from "react";
import Home from "./Home";
import { FilteredBreweries } from "./FilteredBreweries";

export const ConfigContext = React.createContext();
export const BrewerContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === "Home") return <Home />;
  return <div>Not Found</div>;
};

const App = ({ pageName, breweries }) => {
  const filteredBrewers = FilteredBreweries(breweries);

  const [brewer, setBrewer] = useState(filteredBrewers[0]);

  const configValue = {
    filteredBrewers,
  };
  return (
    <BrewerContext.Provider value={{ brewer, setBrewer }}>
      <ConfigContext.Provider value={configValue}>
        <div>{pageToShow(pageName)}</div>;
      </ConfigContext.Provider>
    </BrewerContext.Provider>
  );
};

export default App;
