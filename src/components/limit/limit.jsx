import Header from "./Header/Header";

export default function Limit({ children, className }) {
  return (
    <>
      <Header />
      <main className={`flex w-full flex-col ${className}`}>{children}</main>
    </>
  );
}
