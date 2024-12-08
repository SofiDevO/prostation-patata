import { useState } from "react";
import NavMenu from "../nav-menu.jsx";
import { menuHeader } from "../../../data/menuLinksData.js";
import Icons from "../../icons.jsx";
import HamburgerBtn from "../../atoms/HamburgerBtn/HamburgerBtn.jsx";
import "./header.css"


export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };
  const closePanel = () => {
    setIsActive(false);
  };


  return (
    <header className="fixed z-30 flex h-[60px] w-full items-center justify-between bg-transparent pl-3.5 px-5">
      <img src="./favicon.svg" alt="icon the website" className="h-3/4" />
      <NavMenu
        mapMenu={menuHeader}
        isActive={isActive}
        closePanel={closePanel}
        className="text-white"
        anchorClassName="animation-anchors"
      />


      <HamburgerBtn
        classActive={isActive ? "is-active" : ""}
        onClick={toggleActive}
      />
    </header>
  );
}
