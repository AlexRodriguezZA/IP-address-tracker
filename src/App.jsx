//Componentes
import Header from "./components/Header";
import Map from "./components/Map";

import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <>
      <DataProvider>
        <div className="w-full h-screen flex flex-col items-center">
          <Header />
          <Map />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
