import Limit from "../../components/limit/limit";
import Hero from "./components/hero";

export default function Home() {
  return (
    <Limit className="w-full h-full">
      <Hero />
    </Limit>
  );
}
