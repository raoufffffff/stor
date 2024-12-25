import React from "react";
import typeOfType from "../../constanst/typepftype";
import { NavLink, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TypeLinks = ({ id }) => {
  const { t } = useTranslation();
  const [searchparams] = useSearchParams();

  if (id === "offer") {
    return null; // No rendering for 'offer' ID
  }

  const typeObject = typeOfType.find((e) => e.name === id);

  if (!typeObject) {
    return <div>{t("No types available")}</div>;
  }

  const ourTypes = typeObject.types.map((type) => (
    <NavLink
      to={`/type/${id}?typeof=${type}`}
      key={type}
      className={`${
        searchparams.get("typeof") === type &&
        "font-bold text-[#dd2a5b] underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"
      } flex items-center px-5 py-2 flex-1 mx-1 min-w-fit md:border-none`}
    >
      {t(type)}
    </NavLink>
  ));

  return (
    <ul className="w-full overflow-x-scroll a pb-3 flex">
      <NavLink
        key="all"
        to={`/type/${id}`}
        className={`${
          !searchparams.get("typeof")   && "font-bold text-[#dd2a5b] underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"
        } flex items-center px-5 py-2 flex-1 mx-1 min-w-fit md:border-none`}
      >
        {t("all")}
      </NavLink>
      {ourTypes}
    </ul>
  );
};

export default TypeLinks;
