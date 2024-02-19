import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { markers } from "../shared/markers";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 12.965216,
  lng: 2237.586456,
};

export default function Map() {
  const { GOOGLE_API_KEY } = process.env;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={marker.icon} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}
