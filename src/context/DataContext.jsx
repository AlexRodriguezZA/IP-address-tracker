import { createContext, useContext, useState } from "react";
import { fetchDataIP } from "../utils/FetchDataIP";
const DataContext = createContext();


//HOOK DEL CONTEXT PERSONALIZADO
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [dataIP, setDataIP] = useState(null);
  const [Error, setError] = useState(false)
  const handleFetch = async (ip) => {
    if (!ip) {
      return;
    }
    const data = await fetchDataIP(ip);
    if(data === null){
      setError(true)
      return
    }
    setDataIP(data);
    setError(false)
  };

  return (
    <DataContext.Provider value={{ dataIP, Error, handleFetch }}>
      {children}
    </DataContext.Provider>
  );
};
