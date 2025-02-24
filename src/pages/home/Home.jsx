import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Categories from "../../compunent/Categories/Categories";
import BestOffer from "../../compunent/best/BestOffer";
import Adds from "../../compunent/adds/Adds";
import { AnimatePresence } from "framer-motion";
import VieCard from "../../compunent/Add/VieCard";
import state from "../../stor/stor";
import { useSnapshot } from "valtio";
import analytics from "../../firebase";
import { logEvent } from "firebase/analytics";

const Home = () => {
  const { t } = useTranslation(); // Get the translation function
  const snap = useSnapshot(state);
  useEffect(() => {
    logEvent(analytics, "log")
    console.log("good");

  }, [])
  return (
    <div className="w-full">
      <Adds />

      <h1 className="font-bold text-xl mt-3 px-5">{t("categories")}</h1>
      <Categories />
      <h1 className="font-bold text-xl mt-3 px-5">{t("bestOffer")}</h1>
      <BestOffer />
      <AnimatePresence>{snap.items.length > 0 && <VieCard />}</AnimatePresence>
    </div>
  );
};

export default Home;
