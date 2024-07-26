import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src="assets/images/headerlogo.png" className="w-40" alt="Logo" />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-800 hover:drop-shadow-2xl">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img src="assets/icon/hamburger.png" alt="" className="w-5 h-5"  />
            </div>
        </nav>
    </header>
  )
}

export default Nav