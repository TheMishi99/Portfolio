import profilePicture from "/ProfilePicture.jpg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div
      id="hero"
      className="w-full md:max-w-[700px] flex-col md:flex-row flex justify-center items-center p-2 gap-2"
    >
      <div id="hero-img" className="flex justify-center items-center">
        <img
          src={profilePicture}
          alt="Matias Sayago Profile Picture"
          className="size-44 rounded-full"
        />
      </div>
      <div
        id="hero-info"
        className="w-full md:w-[70%] flex flex-col justify-center items-center gap-2"
      >
        <p className="w-full">
          {t("hero.name_prefix")}{" "}
          <span className="font-bold text-cyan-400">Matias Demian Sayago</span>
        </p>
        <p className="w-full">
          {t("hero.description_1")}{" "}
          <span className="font-bold text-cyan-400">
            {t("hero.description_highlighted")}
          </span>{" "}
          {t("hero.description_2")}
        </p>
        <p className="w-full">
          {t("hero.stack_info")}{" "}
          <span className="font-bold text-cyan-400">
            {t("hero.stack_info_highlighted")}
          </span>
        </p>
        <p className="w-full">
          {t("hero.framework_info_1")}{" "}
          <span className="font-bold text-cyan-400">
            {t("hero.framework_info_highlighted")}
          </span>{" "}
          {t("hero.framework_info_2")}
        </p>
        <p className="w-full">{t("hero.footer")}</p>
      </div>
    </div>
  );
}
