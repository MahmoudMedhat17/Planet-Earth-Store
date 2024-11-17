import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section>
      <img src="/heroImg.jpg" alt="heroImage" className="relative" />
      <div className="w-full flex flex-col justify-center items-center absolute top-16 sm:top-24 md:top-36 lg:top-56 xl:top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 space-y-1 md:space-y-4">
        <h1 className="text-xl sm:text-5xl md:text-6xl text-primary text-[50px]">
          EARTH
        </h1>
        <h2 className="text-lg sm:text-2xl tracking-widest uppercase text-accent/80">
          Multipurpose Store
        </h2>
        <Button className="bg-secondary hover:bg-primary duration-200 rounded-lg">
          <span className="uppercase text-white px-2 sm:px-4">Shop Now</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
