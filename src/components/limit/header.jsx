import NavMenu from "./nav-menu.jsx";
import { menuHeader } from "../../data/menuLinksData.js";
import Icons from "../icons.jsx";

export default function Header() {
  return (
    <header className="fixed z-30 flex h-[60px] w-full items-center justify-between bg-transparent pl-3.5 pr-5">
      <img src="./favicon.svg" alt="icon the website" className="h-3/4" />
      <NavMenu
        mapMenu={menuHeader}
        className="text-white"
        anchorClassName="animation-anchors"
      />
      <search className="flex h-[40px] w-[250px] overflow-hidden rounded-r-md border-b-2 border-[#58C917]">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full bg-transparent px-2 text-white outline-none placeholder:tracking-wider placeholder:text-white"
        />
        <Icons
          name="search"
          className="flex h-full min-w-[40px] items-center justify-center bg-[#58C917] text-2xl text-black"
        />
      </search>
    </header>
  );
}
