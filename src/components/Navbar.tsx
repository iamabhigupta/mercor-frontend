import eye from "../assets/eye.svg"
import logo from "../assets/logo.svg"
import cube from "../assets/cube.png"
import stairs from "../assets/stairs.png"

const menus = [
  "Sign in",
  "Legal",
  "Licences",
  "Security",
  "Careers",
  "Press",
  "Support",
  "Status",
  "Codeblog",
]

const smDeviceMenus = [
  "Sign in",
  "Legal",
  "Licences",
  "Security",
  "Careers",
  "Press",
]

const Navbar = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-5">
      <img src={logo} alt="" />
      <div className="hidden gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider lg:flex">
        {menus.map((menu) => (
          <p key={menu}>{menu}</p>
        ))}
      </div>
      <div className="hidden gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider sm:flex lg:hidden">
        {smDeviceMenus.map((menu) => (
          <p key={menu}>{menu}</p>
        ))}
      </div>
      <div className="flex gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider sm:hidden">
        <p>Sign in</p>
        <p>Legal</p>
      </div>
      <img src={eye} alt="eye" className="hidden sm:flex" />
      <img
        src={cube}
        alt="Cube"
        className="absolute left-10 top-24 sm:left-24 sm:top-20 lg:left-40 lg:top-16"
      />
      <img
        src={stairs}
        alt="Stairs"
        className="absolute right-40 top-16 hidden lg:flex"
      />
    </div>
  )
}

export default Navbar