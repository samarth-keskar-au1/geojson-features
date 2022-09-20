import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useGlobalContext } from "../../Context/Context";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const Map = () => {
  const { setQuery, setError } = useGlobalContext();
  const onDrawingCreated = async (e) => {
    setQuery({
      min_longitude: e?.layer?._bounds?._southWest?.lng,
      min_latitude: e?.layer?._bounds?._southWest?.lat,
      max_longitude: e?.layer?._bounds?._northEast?.lng,
      max_latitude: e?.layer?._bounds?._northEast?.lat,
    });
  };
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={6}
      maxZoom={16}
      style={{ height: "50vh", width: "100%" }}
    >
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={onDrawingCreated}
          draw={{
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: false,
          }}
          onDeleted={() => setError({ show: false, msg: "" })}
        />
      </FeatureGroup>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
