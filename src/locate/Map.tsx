import React, { useEffect, useState } from "react";
import ReactMapGL, {
  MapRef,
  GeolocateControl,
  GeolocateResultEvent,
  GeolocateErrorEvent,
  GeolocateEvent,
  MapLayerMouseEvent,
} from "react-map-gl";

function Map() {
  const [viewState, setViewState] = useState({
    longitude: 37.4809356,
    latitude: 55.5451786,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  const mapRef = React.useRef<MapRef>(null);

  const geolocateControlRef = React.useCallback((ref: any) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);

  const onGeolocate = (e: GeolocateResultEvent) => {
    //Called on each Geolocation API position update that returned as success.
    console.log("on geolocate on: ", e.coords);
  };

  const onError = (e: GeolocateErrorEvent) => {
    //Called on each Geolocation API position update that returned as an error.
    console.log("on geolocate error: ", e.message);
  };

  const onOutOfMaxBounds = (e: GeolocateResultEvent) => {
    //Called on each Geolocation API position update that returned as success but user position is out of map maxBounds.
    console.log("onOutOfMaxBounds", e.coords);
  };

  const onTrackUserLocationStart = (e: GeolocateEvent) => {
    // Called when the GeolocateControl changes to the active lock state.
    console.log("onTrackUserLocationStart", e.target.getDefaultPosition);
  };

  const onTrackUserLocationEnd = (e: GeolocateEvent) => {
    console.log("onTrackUserLocationEnd", e.target.getDefaultPosition);
  };

  const onMapClick = (e: MapLayerMouseEvent) => {
    mapRef.current?.flyTo({
      center: [e.lngLat.lng, e.lngLat.lat],
      duration: 2000,
      zoom: 16,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      mapRef.current?.flyTo({
        center: [viewState.longitude, viewState.latitude],
        duration: 2000,
      });
    }, 500);
  }, []);

  return (
    <>
      <ReactMapGL
        ref={mapRef}
        initialViewState={viewState}
        style={{ width: "100vw", height: "100vh" }}
        mapboxAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
        mapStyle={`mapbox://styles/mapbox/dark-v9`}
        onClick={onMapClick}
      >
        <GeolocateControl
          ref={geolocateControlRef}
          trackUserLocation={true} // default: false
          showAccuracyCircle={true} // default: true
          showUserHeading={true} // default: false
          showUserLocation={true} // default: true
          fitBoundsOptions={{ maxZoom: 16 }}
          onGeolocate={onGeolocate}
          onError={onError}
          onOutOfMaxBounds={onOutOfMaxBounds}
          onTrackUserLocationStart={onTrackUserLocationStart}
          onTrackUserLocationEnd={onTrackUserLocationEnd}
        />
        ;
      </ReactMapGL>
    </>
  );
}

export default Map;
