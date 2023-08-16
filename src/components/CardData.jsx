const CardData = ({ dataIP }) => {
  return (
    <div
      className="animate-fade w-5/6 h-64 fixed top-28 bg-white p-4 shadow-xl rounded-lg z-50 flex flex-col items-center gap-4 justify-center 
                     md:flex-row md:h-36 md:top-36 md:w-3/4 md:justify-around md:items-center md:max-w-[1000px]"
    >
      <section className="flex flex-col items-center gap-1 md:items-start">
        <span className="text-xs text-Dark-Gray font-bold">IP ADRESS</span>
        <p className="text-Very-Dark-Gray font-medium text-xl md:text-2xl">
          {dataIP.ip}
        </p>
      </section>

      <section className="flex flex-col items-center gap-1 md:items-start">
        <span className="text-xs text-Dark-Gray font-bold">LOCATION</span>
        <p className="text-Very-Dark-Gray font-medium text-xl md:text-2xl">
          {dataIP.location.region}
        </p>
      </section>

      <section className="flex flex-col items-center gap-1 md:items-start">
        <span className="text-xs text-Dark-Gray font-bold">TIMEZONE</span>
        <p className="text-Very-Dark-Gray font-medium text-xl md:text-2xl">
          {dataIP.location.timezone}
        </p>
      </section>

      <section className="flex flex-col items-center gap-1 md:items-start">
        <span className="text-xs text-Dark-Gray font-bold">ISP</span>
        <p className="text-Very-Dark-Gray font-medium text-xl md:text-2xl">
          {dataIP.isp}
        </p>
      </section>
    </div>
  );
};

export default CardData;
