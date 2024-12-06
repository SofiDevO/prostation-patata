export default function Hero() {
  return (
    <section className="relative flex h-[750px] w-full items-center justify-center bg-black/65 bg-cover">
      <img
        src="/images/hero/image-1.png"
        alt="carrusel the images"
        className="absolute -z-10 h-full w-full"
      />
      <article className="w-full max-w-[1400px] space-y-7 text-white">
        <h1 className="text-8xl font-medium">Everywhere in Quebec</h1>
        <p className="text-2xl font-light">
          Cleaning and protection of paving stones, bricks, wood and concrete
          throughout Quebec
        </p>
        <button className="rounded-lg bg-[#58c917] px-7 py-3 text-lg font-bold text-black">
          Call to Action
        </button>
      </article>
    </section>
  );
}
