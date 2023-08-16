//Componentes
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MakerMap from "./MakerMap";

//Funciones y hooks
import { useDataContext } from "../context/DataContext";

const Map = () => {
  const { dataIP } = useDataContext();

  const position = [-34.0, -64.0];
  return (
    <>
      <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" /> {/* Cambia la posición aquí */}
        {dataIP && <MakerMap dataIP={dataIP} />}
      </MapContainer>
    </>
  );
};

export default Map;
