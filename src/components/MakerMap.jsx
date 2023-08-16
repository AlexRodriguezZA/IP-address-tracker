//Funciones y hooks
import { Marker, useMap } from 'react-leaflet';
import { useEffect } from "react";

const MakerMap = ({ dataIP }) => {
  const map = useMap();

  //Desesctructuramos el dataIP y luego aplicamos la función de Flyto de leaflet
  useEffect(() => {
    if (dataIP) {
      const { lat, lng } = dataIP.location;

      map.flyTo([lat, lng], 8, {
        duration: 3, 
      });
    }
  }, [dataIP, map]);

  return dataIP ? <Marker position={{ lat: dataIP.location.lat, lng: dataIP.location.lng }} /> : null;
};

export default MakerMap;
