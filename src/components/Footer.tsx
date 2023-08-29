import apple from "../assets/apple.svg"
import playStore from "../assets/playstore.svg"
import bigCure from "../assets/bigCure.png"
import arrow from "../assets/arrow.svg"
import stairs from "../assets/stairs.png"
import social1 from "../assets/social1.svg"
import social2 from "../assets/social2.svg"
import social3 from "../assets/social3.svg"

const Footer = () => {
  return (
    <div>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-3">
        <div className="z-10 flex items-center justify-between gap-5 lg:hidden">
          <button className="flex h-[44px] min-w-[145px] items-center rounded-[7px] border-[1px] bg-black p-[20px]">
            <img src={apple} alt="apple" />
            <span className="ml-4 text-[12px] font-bold">APP STORE</span>
          </button>
          <button className="flex h-[44px] min-w-[145px] items-center rounded-[7px] border-[1px] bg-black p-[20px]">
            <img src={playStore} alt="apple" />
            <span className="ml-4 text-[12px] font-bold">GOOGLE PLAY</span>
          </button>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-3 py-5 lg:justify-between">
        <div className="z-10 hidden items-center justify-between gap-5 lg:flex">
          <button className="flex h-[50px] w-[170px] items-center justify-between rounded-[7px] border-[1px] bg-black p-[25px]">
            <img src={apple} alt="apple" />
            <span className="text-[14px] font-bold">APP STORE</span>
          </button>
          <button className="flex h-[50px] w-[170px] items-center justify-between rounded-[7px] border-[1px] bg-black p-[25px]">
            <img src={playStore} alt="apple" />
            <span className="text-[14px] font-bold">GOOGLE PLAY</span>
          </button>
        </div>
        <img
          src={bigCure}
          alt="bigCure"
          className="absolute bottom-56 right-10 h-28 sm:bottom-36 sm:h-36 lg:bottom-[3.3rem] lg:left-28"
        />
        {/* <img
          src={stairs}
          alt="stairs"
          className="absolute bottom-[38rem] right-5 h-28 sm:bottom-72 sm:right-10 sm:h-36 lg:hidden"
        /> */}
        <img
          src={arrow}
          alt="arrow"
          className="absolute bottom-72 left-[50%] right-[50%] sm:bottom-60 lg:bottom-10"
        />

        <div className="flex flex-col items-center justify-center gap-7 px-5 md:flex-row">
          <p className="w-full text-center text-[10px] leading-[13px] text-[#B6B6B6] md:w-[500px] md:text-left lg:w-[363px]">
            lBrokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex items-center justify-center gap-5">
            <img src={social1} alt="social1" />
            <img src={social2} alt="social2" />
            <img src={social3} alt="social3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
