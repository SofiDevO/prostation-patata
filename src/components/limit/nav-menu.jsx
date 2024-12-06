export default function NavMenu({ mapMenu, className, anchorClassName }) {
  return (
    <nav className={`flex ${className}`}>
      <ul className="flex space-x-10 font-medium">
        {mapMenu.map((element) => (
          <a
            href={element.link}
            key={element.title}
            className={anchorClassName}
          >
            {element.title}
          </a>
        ))}
      </ul>
    </nav>
  );
}
