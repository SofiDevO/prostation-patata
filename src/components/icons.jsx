import "@fontsource-variable/material-symbols-rounded/fill.css";

export default function Icons({ name, className, fill }) {
  return (
    <span
      className={`material-icons-outlined" ${className}`}
      style={{
        fontFamily: "Material Symbols Rounded Variable",
        fontVariationSettings: `"FILL" ${fill ? "1" : "0"}`,
      }}
    >
      {name}
    </span>
  );
}
