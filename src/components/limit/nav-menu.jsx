import Icons from "../icons";

export default function NavMenu({ mapMenu, className, anchorClassName, isActive, closePanel }) {
  return (
    <nav className={`flex justify-between ${className}`}>
      <ul className={`flex md:space-x-10 font-medium header__list ${isActive ? "is-active" : ""}`}>
        {mapMenu.map((element) => (
          <a
            href={element.link}
            key={element.title}
            className={anchorClassName}
            onClick={closePanel}
          >
            {element.title}
          </a>
        ))}
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
      </ul>
    </nav>
  );
}
