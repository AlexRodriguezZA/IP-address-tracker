export const fetchDataIP = async (IP) => {
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_432IV2DdXWbgMr0e7G7WOAhTGailA&ipAddress=${IP}`;
  const URL_miIP = `https://geo.ipify.org/api/v2/country,city?apiKey=at_432IV2DdXWbgMr0e7G7WOAhTGailA&ipAddress`;
  if (IP) {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
        return null;
      }
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  }
  else{
    try {
        const response = await fetch(URL_miIP);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        } else {
          console.error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
          return null;
        }
      } catch (error) {
        console.error("Ocurrió un error:", error);
      }
  }
};
