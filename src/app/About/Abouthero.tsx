const Abouthero = () => {
  return (
    <section className="relative">
      <img
        src="About-banner.jpg"
        alt="AboutBanner"
        className="h-80 sm:h-full"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="tracking-widest uppercase text-primary font-semibold text-2xl sm:text-4xl lg:text-6xl">
          WHO ARE WE?
        </h2>
      </div>
    </section>
  );
};

export default Abouthero;
