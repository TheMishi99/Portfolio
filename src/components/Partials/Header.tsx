import { useState } from "react";
import type { NavbarItem } from "../../typings/my-types";
import Navbar from "../Navbar";
import GamerCat from "/Gamer-Cat.jpg";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect";

export default function Header() {
  const [showBurguerMenu, setShowBurguerMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const navbarItems: NavbarItem[] = [
    { id: 1, title: t("header.about"), href: "#about-me" },
    { id: 2, title: t("header.projects"), href: "#my-projects" },
    { id: 3, title: t("header.contact"), href: "#contact-me" },
  ];

  const onBurgerMenuButtonClick = () => {
    setShowBurguerMenu(!showBurguerMenu);
  };

  return (
    <header
      id="header"
      className="w-full flex flex-col justify-start items-center p-2 gap-2 backdrop-blur-xl rounded-xl"
    >
      <div className="w-full flex justify-between items-center p-2 gap-2 relative">
        <a href="/" className="aspect-square rounded-full w-[120px]">
          <img src={GamerCat} alt="Avatar" className="w-full rounded-full" />
        </a>
        <div className="hidden sm:flex justify-center items-center p-2 gap-2">
          <Navbar navbarItems={navbarItems} />
        </div>
        <div className="flex justify-center items-center p-2 gap-2">
          <LanguageSelect />
          <button
            className="flex sm:hidden justify-center items-center bg-slate-800 rounded cursor-pointer p-2"
            id="burguer-menu"
            onClick={onBurgerMenuButtonClick}
          >
            {showBurguerMenu ? <X color="white" /> : <Menu color="white" />}
          </button>
        </div>
      </div>
      <div className="flex sm:hidden justify-center items-center">
        {showBurguerMenu && (
          <Navbar navbarItems={navbarItems} direction="col" />
        )}
      </div>
    </header>
  );
}
