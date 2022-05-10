import React from "react";
import { useTypedSelector } from "store";
import { GeolocationContent } from "./styles";

export const GeolocationInfo = () => {
  const geolocationState = useTypedSelector((state) => state.geolocation);
  return (
    <div>
      {geolocationState.geolocation.latitude && (
        <GeolocationContent>
          <span>Sua Localização</span>
          <span>Latitude: {geolocationState.geolocation.latitude}</span>
          <span>Longitude: {geolocationState.geolocation.longitude}</span>
        </GeolocationContent>
      )}
    </div>
  );
};
