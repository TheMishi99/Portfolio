import { NavbarItem } from "../typings/my-types";

export default function Navbar({
  navbarItems,
  direction = "row",
}: {
  navbarItems: NavbarItem[];
  direction?: "row" | "col";
}) {
  return (
    <nav className="w-full flex justify-center items-center">
      <ul
        className={`w-full flex flex-${direction} justify-center items-center py-2 gap-2 transition-all`}
      >
        {navbarItems.map((navbarItem) => (
          <li
            key={navbarItem.id + navbarItem.title}
            className="flex justify-center items-center"
          >
            <a
              href={navbarItem.href}
              className="border-b border-cyan-300 hover:border-cyan-500 transition-colors"
            >
              {navbarItem.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
