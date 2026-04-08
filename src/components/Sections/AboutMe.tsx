import { useTranslation } from "react-i18next";
import Hero from "../Hero";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div
      id="about-me"
      className="flex flex-col justify-center items-center p-2 gap-2 backdrop-blur-lg rounded-xl"
    >
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-all duration-300">
        {t("header.about")}
      </h2>
      <Hero />
    </div>
  );
}

export default AboutMe;
