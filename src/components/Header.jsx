//Componentes
import Title from "./Title";
import SearchIP from "./SearchIP";
import CardData from "./CardData";
import Error_message from "./Error_message";

//Assets
import bgHeaderDesktop from "../assets/images/pattern-bg-desktop.png";

//Funciones y hooks
import { useDataContext } from "../context/DataContext";

const Header = () => {
  const { dataIP, Error } = useDataContext();
  return (
    <header
      className="bg-black w-full h-1/2 flex flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgHeaderDesktop})`,
      }}
    >
      <Title />
      <SearchIP />
      {Error ? <Error_message /> : dataIP ? <CardData dataIP={dataIP} /> : null}
    </header>
  );
};

export default Header;
