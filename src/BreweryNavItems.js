import React, { useState, useContext } from "react";
import { BrewerContext, ConfigContext } from "./App";

export function BreweryNavItems() {
  const context = useContext(ConfigContext);

  const filteredBrewers = context.filteredBrewers;

  const { brewer, setBrewer } = useContext(BrewerContext);
  const NavItems = filteredBrewers.map((element) => {
    return (
      <li key={element.id} className="nav-item">
        <a
          className="nav-link active"
          onClick={() => {
            setBrewer(element);
          }}
        >
          {element.name}
        </a>
      </li>
    );
  });

  return (
    <div>
      <h3>Breweries</h3>
      <ul className="nav flex-column">{NavItems}</ul>
    </div>
  );
}
