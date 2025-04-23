import { useEffect, useState } from "react";
import type { CustomSelectOption, NavbarItem } from "../../typings/my-types";
import Navbar from "../Navbar";
import GamerCat from "/Gamer-Cat.jpg";
import CustomSelect from "../CustomSelect";
import { Menu, X } from "lucide-react";

const navbarItems: NavbarItem[] = [
  { id: 1, title: "About Me", href: "#about-me" },
  { id: 2, title: "My Projects", href: "#my-projects" },
  { id: 3, title: "Contact Me", href: "#contact-me" },
];

const languageOptions: CustomSelectOption[] = [
  {
    id: 1,
    title: "English",
    value: "en",
  },
  {
    id: 2,
    title: "Spanish",
    value: "es",
  },
];

export default function Header() {
  const [showBurguerMenu, setShowBurguerMenu] = useState<boolean>(false);

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
          <CustomSelect options={languageOptions} />
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
