import type { NextPage } from "next";
import { useState, Dispatch, useContext } from "react";
import { FlyToInterpolator, ViewState, ViewportProps } from "react-map-gl";
import Map from "@/components/Map";
import * as Locations from "@/locations/index";
import { MapProvider, MapContext } from "../providers/AppContext";

const MapPage: NextPage = () => {
  const { viewState, setViewState } = useContext(MapContext);
  const handleChangeViewState = ({ viewState, ...rest }) => {
    setViewState(viewState);
  };

  const handleFlyTo = (destination: ViewState) =>
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  return (
    <MapProvider>
      <Map height="100vh" width="100vw" />
    </MapProvider>
  );
};

export default MapPage;
