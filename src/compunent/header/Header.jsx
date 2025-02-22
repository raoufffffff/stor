import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import Lang from "../lan/Lang";
import Search from "./Search/Search";

const Header = () => {
  const location = useLocation();
  const navigation = useNavigate()
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [show, setshow] = useState(false)
  const [showsearch, setshowsearch] = useState(false)
  const hide = () => setshow(false)
  const hidesearch = () => setshowsearch(false)
  const [search, setsearch] = useState("")
  // Change the `dir` attribute based on the current language
  useEffect(() => {
    const handleDirChange = () => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", dir);
    };

    handleDirChange();
  }, [i18n.language]);

  const searchSubmit = (e) => {
    setsearch(e)
    setshowsearch(false)
    navigation(`/search?to=${e}`)
  }

  return (
    <header
      className={`flex flex-wrap px-5 py-1.5 lg:py-3 items-center lg:justify-between bg-[#dd2a5b] transition-all fixed top-0 left-0 z-50 w-full`}
    >
      {/* Logo */}
      <Link
        to={"/"}
        className="flex mx-auto items-center text-2xl font-bold text-white"
      >
        <HiShoppingCart color="#fff" className="mr-1" size={30} />
        daily shop
      </Link>

      {/* Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (search.length > 0) {
            setshowsearch(false)
            navigation(`/search?to=${search}`)
          }
        }}
        className="w-9/12 lg:w-6/12 mx-auto"
      >

        <label
          onClick={() => setshowsearch(true)}
          htmlFor="shearch"
          className="rounded-xl shadow-xl bg-white h-10 w-full mt-1.5 mx-auto flex items-center px-2"
        >
          <MdOutlineSearch color="#000" size={25} />
          <input
            name="shearch"
            id="shearch"
            value={search}
            onChange={(e) => setsearch(e.currentTarget.value)}
            className="w-10/12 focus:outline-none ml-2"
            placeholder={t("search")}
          />
        </label>
        <button
          className="hidden"
        ></button>
      </form>

      {/* Language Switcher */}

      <button
        onClick={() => setshow(true)}
        className="absolute right-5 bottom-4"
      >
        <IoLanguage size={22} color="#fff" />
      </button>
      {/* Back Button */}
      {location.pathname !== "/" && (
        <Link
          to={`${location.pathname[1] === "t" ? "/" : "/type/offer"}`}
          className="absolute left-5 bottom-4"
        >
          <FaArrowLeft size={22} color="#fff" />
        </Link>
      )}
      {show && <Lang hide={hide} />}
      {showsearch && <Search hide={hidesearch} searchresult={search} searchSubmit={searchSubmit} />}
    </header>
  );
};

export default Header;


