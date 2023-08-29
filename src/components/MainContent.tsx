import phone from '../assets/phone.png';

const MainContent = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <h2 className="uppercase tracking-wider font-extrabold text-[95px] sm:text-[150px] lg:text-[180px] text-center leading-none sm:leading-[150px]">
        <span className="mr-">CA</span>
        <span className="ml-6 sm:ml-12 lg:ml-16">SH</span>
      </h2>
      <img
        src={phone}
        alt="phone"
        className="absolute -top-4 sm:-top-10 lg:right-[9.7rem] sm:right-[8rem] right-[4.3rem] h-[220px] w-[200px] sm:h-[370px] lg:h-[413px] sm:w-[300px] lg:w-[355px]"
      />
      <h2 className="uppercase relative tracking-wider font-extrabold text-[95px] sm:text-[150px] lg:text-[180px] text-center leading-none sm:leading-[150px] z-50">
        APP
      </h2>
    </div>
  );
};

export default MainContent;
