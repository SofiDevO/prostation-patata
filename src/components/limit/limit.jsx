import Header from "./header";

export default function Limit({ children, className }) {
  return (
    <>
      <Header />
      <main className={`flex w-full flex-col ${className}`}>{children}</main>
    </>
  );
}
