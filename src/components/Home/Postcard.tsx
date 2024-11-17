import { Button } from "../ui/button";

const Postcard = () => {
  return (
    <section className="py-10 relative">
      <img
        src="/postCardImg.jpg"
        alt="postCardImage"
        className="h-[300px] w-full"
      />
      <div className="px-4 sm:px-0 w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h2 className="text-4xl font-medium tracking-widest uppercase">
          Give the Gift of a Postcard
        </h2>
        <p className="opacity-60">
          Give the gift of a lasting memory with a postcard
        </p>
        <Button className="bg-secondary hover:bg-primary hover:duration-300">
          <span className="text-white uppercase tracking-widest">
            Purchase A Postcard
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Postcard;
