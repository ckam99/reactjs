import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  MapLayerMouseEvent,
  ViewStateChangeEvent,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import Sidebar from "./components/Sidebar";
import ControlPanel from "./components/ControlPanel";
import Pin from "./components/Pin";
import MapMode, { AppMode } from "./components/MapMode";

type Place = {
  title: string;
  latlng: {
    lng: number;
    lat: number;
  };
};

function Map() {
  const [viewState, setViewState] = useState({
    longitude: 37.4809356,
    latitude: 55.5451786,
    zoom: 14,
  });
  const [currentPlace, setCurrentPlace] = useState<Place>();
  const [mapMode, setMapMode] = useState<AppMode>("dark");
  const [places, setPlaces] = useState<Place[]>([
    {
      title: "place 1",
      latlng: {
        lng: 37.501933567620995,
        lat: 55.55319770730341,
      },
    },
    {
      title: "place 2",
      latlng: {
        lng: 37.50904515047765,
        lat: 55.547400122745756,
      },
    },
    {
      title: "place 3",
      latlng: {
        lng: 37.509817626673936,
        lat: 55.5418400100624,
      },
    },
  ]);

  const onMapMove = React.useCallback((e: ViewStateChangeEvent) => {
    // console.log("map is moving", e.viewState);
    setViewState({
      latitude: e.viewState.latitude,
      longitude: e.viewState.longitude,
      zoom: Math.round(e.viewState.zoom),
    });
  }, []);

  const onMapClick = (e: MapLayerMouseEvent) => {
    const p = {
      title: "place " + (places.length + 1),
      latlng: { lat: e.lngLat.lat, lng: e.lngLat.lng },
    };
    setPlaces([...places, p]);
  };

  return (
    <>
      <div className="topbar">
        Longitude: {viewState.longitude.toFixed(4)} | Latitude:{" "}
        {viewState.latitude.toFixed(4)} | Zoom: {viewState.zoom.toFixed(2)}
      </div>

      <ReactMapGL
        initialViewState={viewState}
        style={{ width: "100vw", height: "100vh" }}
        mapboxAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
        mapStyle={`mapbox://styles/mapbox/${mapMode}-v9`}
        onMove={onMapMove}
        onClick={onMapClick}
      >
        <Marker
          longitude={37.48051300563375}
          latitude={55.49727456553313}
        ></Marker>
        {places.map((place, i) => (
          <Marker
            longitude={place.latlng.lng}
            latitude={place.latlng.lat}
            key={i}
            anchor="bottom"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setCurrentPlace(place);
            }}
          >
            <Pin />
          </Marker>
        ))}

        {currentPlace && (
          <Popup
            anchor="top"
            longitude={Number(currentPlace.latlng.lng)}
            latitude={Number(currentPlace.latlng.lat)}
            onClose={() => setCurrentPlace(null as unknown as Place)}
          >
            <div>
              {currentPlace.title}
              <div>
                Latitude: <pre>{currentPlace.latlng.lat}</pre>
              </div>

              <div>
                Longitude: <pre>{currentPlace.latlng.lng}</pre>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGL>

      <MapMode onClick={(e) => setMapMode(e)} defaultMode="dark" />
    </>
  );
}

export default Map;
