import React, { useContext, createContext, useState, useEffect } from "react";
import * as Locations from "@/locations/index";
import { ViewState, ViewportProps, StaticMap } from "react-map-gl";
export const MapContext = createContext({} as any);

export const MapProvider = ({ children }) => {
  const [viewState, setViewState] = useState<ViewState>(Locations.freetown);
  const [mapStyle, setMapStyle] = useState(
    "https://api.maptiler.com/maps/topo/style.json?key=XhqZqBw9V2UrmNetMf7t"
  );
  return (
    <MapContext.Provider
      value={{ viewState, setViewState, mapStyle, setMapStyle }}
    >
      {children}
    </MapContext.Provider>
  );
};
