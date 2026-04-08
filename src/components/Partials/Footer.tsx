import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center items-center p-2">
      <span>
        &copy; {new Date().getFullYear()} Matias Sayago.{" "}
        {t("footer.rights")}
      </span>
    </div>
  );
}

export default Footer;
