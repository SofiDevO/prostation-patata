import Icons from "../icons";

export default function NavMenu({ mapMenu, className, anchorClassName, isActive, closePanel }) {
  return (
    <div className={` ${isActive ? "is-active" : ""}  header__list flex w-full  justify-center  ${className} `}>
      <nav className="md:mx-auto">
        <ul className={`md:space-x-10 font-medium flex md:flex-row flex-col`}>
          {mapMenu.map((element) => (<a
            href={element.link}
            key={element.title}
            className={anchorClassName}
            onClick={closePanel}
          >
            {element.title}
          </a>
          ))}

        </ul>
      </nav>
      <search className="flex md:self-end h-[40px] w-[250px] overflow-hidden rounded-r-md border-b-2 border-[#58C917]">
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
    </div >

  );
}
