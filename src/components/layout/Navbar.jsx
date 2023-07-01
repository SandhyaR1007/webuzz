import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Search from "../filters/Search";
import logo from "../../assets/webuzzlogo.svg";
import { themeSelector, themeSwitcher } from "../../app/features/themeSlice";

const Navbar = () => {
  const { theme } = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <nav className="fixed left-0 right-0 top-0 py-4 px-2 xs:px-10 md:px-20  flex items-center justify-between gap-2  z-50  bg-[--card-bg] text-[--primary-text] h-16 shadow-md z-2">
      <div className="flex items-center gap-1 text-3xl text-violet-500 font-secondary">
        <img src={logo} className="h-10" />
        <span className="hidden sm:block">Webuzz</span>
      </div>
      <Search />
      <div className="flex sm:gap-10 sm:pe-5 items-center">
        <button
          className={`  text-sm sm:text-xl  text-[--primary-text] border border-[--primary-text]
            ${
              theme === "dark"
                ? "bg-blue-500 shadow-dark"
                : "bg-yellow-300 shadow-light"
            }
             
             p-2 sm:p-3 rounded-full `}
          onClick={() => {
            dispatch(themeSwitcher());
          }}
        >
          {theme === "dark" ? <BsFillMoonStarsFill /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
