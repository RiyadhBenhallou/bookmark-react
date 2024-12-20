import { Menu } from "lucide-react";
import NavButton from "./NavButton";

export default function Navbar() {
  const links = ["features", "pricing", "contact"];
  return (
    <nav className="container text-bookmark-purple flex items-center py-4 mt-4 sm:mt-12">
      <div className="py-4">
        <img src="/logo-bookmark.svg" alt="" />
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center text-bookmark-purple text-xs gap-12 uppercase">
        {links.map((l) => (
          <li className="cursor-pointer">{l}</li>
        ))}
        <NavButton text="Login" />
      </ul>
      <div className="flex sm:hidden justify-end flex-1 cursor-pointer">
        <Menu className="" />
      </div>
    </nav>
  );
}
