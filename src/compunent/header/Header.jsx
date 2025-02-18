import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import Lang from "../lan/Lang";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [show, setshow] = useState(false)
  const hide = () => setshow(false)
  // Change the `dir` attribute based on the current language
  useEffect(() => {
    const handleDirChange = () => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", dir);
    };

    handleDirChange();
  }, [i18n.language]);



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
        DailyShope
      </Link>

      {/* Search Bar */}
      <label
        htmlFor="shearch"
        className="rounded-xl shadow-xl bg-white h-10 w-9/12 lg:w-6/12 mt-1.5 mx-auto flex items-center px-2"
      >
        <MdOutlineSearch color="#000" size={25} />
        <input
          name="shearch"
          id="shearch"
          className="w-10/12 focus:outline-none ml-2"
          placeholder={t("search")}
        />
      </label>

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
    </header>
  );
};

export default Header;


