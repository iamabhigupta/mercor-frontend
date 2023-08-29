import apple from '../assets/apple.svg';
import playStore from '../assets/playstore.svg';
import bigCure from '../assets/bigCure.png';
import arrow from '../assets/arrow.svg';
import stairs from '../assets/stairs.png';
import social1 from '../assets/social1.svg';
import social2 from '../assets/social2.svg';
import social3 from '../assets/social3.svg';

const Footer = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center max-w-7xl mx-auto px-5 py-3">
        <div className="flex lg:hidden justify-between items-center gap-5 z-10">
          <button className="h-[44px] bg-black flex items-center border-[1px] rounded-[7px] min-w-[145px] p-[20px]">
            <img src={apple} alt="apple" />
            <span className="text-[12px] font-bold ml-4">APP STORE</span>
          </button>
          <button className="h-[44px] bg-black flex items-center border-[1px] rounded-[7px] min-w-[145px] p-[20px]">
            <img src={playStore} alt="apple" />
            <span className="text-[12px] font-bold ml-4">GOOGLE PLAY</span>
          </button>
        </div>
      </div>
      <div className="flex w-full relative justify-center lg:justify-between items-center max-w-7xl mx-auto py-5 px-3">
        <div className="hidden lg:flex justify-between items-center gap-5 z-10">
          <button className="h-[50px] bg-black flex items-center border-[1px] rounded-[7px] justify-between w-[170px] p-[25px]">
            <img src={apple} alt="apple" />
            <span className="text-[14px] font-bold">APP STORE</span>
          </button>
          <button className="h-[50px] bg-black flex items-center border-[1px] rounded-[7px] justify-between w-[170px] p-[25px]">
            <img src={playStore} alt="apple" />
            <span className="text-[14px] font-bold">GOOGLE PLAY</span>
          </button>
        </div>
        <img
          src={bigCure}
          alt="bigCure"
          className="absolute bottom-56 sm:bottom-36 lg:bottom-[3.3rem] left-10 sm:h-36 h-28 lg:left-28"
        />
        <img
          src={stairs}
          alt="stairs"
          className="absolute bottom-[38rem] right-5 sm:bottom-72 lg:hidden sm:right-10 h-28 sm:h-36"
        />
        <img
          src={arrow}
          alt="arrow"
          className="absolute bottom-72 sm:bottom-60 lg:bottom-10 right-[50%] left-[50%]"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-7 px-5">
          <p className="text-[#B6B6B6] text-[10px] leading-[13px] w-full md:w-[500px] lg:w-[363px] text-center md:text-left">
            lBrokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex justify-center items-center gap-5">
            <img src={social1} alt="social1" />
            <img src={social2} alt="social2" />
            <img src={social3} alt="social3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
