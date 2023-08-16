//Funciones y hooks
import { useDataContext } from "../context/DataContext";
import { useState } from "react";

//Assets
import Icon_arrow from "../assets/images/icon-arrow.svg";

const SearchIP = () => {
  const { handleFetch, handleSearchMiIP } = useDataContext();
  const [Search, setSearch] = useState("");

  return (
    <div className="w-full flex justify-center items-center gap-1">
      <div className="rounded-2xl mt-5 h-10 w-5/6 flex justify-between items-center gap-1 bg-white md:w-1/3 md:max-w-[500px]">
        <div className="w-3/4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="h-7 w-full ml-3 text-sm"
            placeholder="Ingrese IP..."
          />
        </div>
        <button
          onClick={() => handleFetch(Search)}
          className="bg-black h-full w-1/4 flex justify-center rounded-r-2xl items-center hover:cursor-pointer hover:bg-slate-800  md:w-1/6"
        >
          <img src={Icon_arrow} alt="" />
        </button>
      </div>
      <button onClick={()=>{handleSearchMiIP()}} className="mt-5 bg-black flex w-12 h-10 justify-center text-white font-medium rounded-lg items-center hover:cursor-pointer hover:bg-slate-800  md:w-20 ">
        Mi IP
      </button>
    </div>
  );
};

export default SearchIP;
