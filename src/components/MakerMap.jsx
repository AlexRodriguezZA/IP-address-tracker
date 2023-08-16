// Funciones y hooks
import { Marker, useMap } from 'react-leaflet';
import { useEffect } from "react";
import L from 'leaflet'; 

// Assets 
import locationIcon from "../assets/images/icon-location.svg"

const MakerMap = ({ dataIP }) => {
  const map = useMap();

  // Desestructuramos el dataIP y luego aplicamos la función de Flyto de leaflet
  useEffect(() => {
    if (dataIP) {
      const { lat, lng } = dataIP.location;

      map.flyTo([lat, lng], 8, {
        duration: 3, 
      });
    }
  }, [dataIP, map]);

  // Define el ícono personalizado
  const customIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [32, 32], // Ajusta el tamaño del ícono según sea necesario
    iconAnchor: [16, 32], // Ajusta el anclaje del ícono si es necesario
  });

  return dataIP ? (
    <Marker position={{ lat: dataIP.location.lat, lng: dataIP.location.lng }} icon={customIcon} />
  ) : null;
};

export default MakerMap;
