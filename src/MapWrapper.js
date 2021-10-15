import React, { useContext, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { BrewerContext, ConfigContext } from "./App";

export function MapWrapper() {
  const context = useContext(ConfigContext);

  const filteredBrewers = context.filteredBrewers;

  const { brewer, setBrewer } = useContext(BrewerContext);

  const buildCords = (brewer) => {
    return [parseFloat(brewer.latitude), parseFloat(brewer.longitude)];
  };
  const markers = filteredBrewers.map((brewer) => (
    <Marker
      key={brewer.id}
      width={50}
      onClick={() => setBrewer(brewer)}
      anchor={buildCords(brewer)}
    />
  ));

  return (
    <Map height={600} center={buildCords(brewer)} defaultZoom={7}>
      {markers}
    </Map>
  );
}

export default MapWrapper;
