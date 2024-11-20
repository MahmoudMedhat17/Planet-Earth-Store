import Postcards from "@/app/Shop/Postcards";

const page = () => {

  return (
    <section className="pt-40 px-8 md:px-20">
      <div className="md:flex md:justify-center md:gap-10">
        <div className="pb-8 md:flex-1">
          <img
            src="/postCardV1.jpg"
            alt=""
            className="h-80 sm:h-full md:h-96 w-full md:flex-1"
          />
        </div>
        <div className="space-y-4 md:flex-1">
          <h3 className="opacity-70">Home / Postcards / Postcard V1</h3>
          <div className="space-y-4 md:max-w-[500px]">
            <h3 className="text-2xl">PostCard V1</h3>
            <p className="text-2xl opacity-70 font-semibold">$14.99</p>
            <p className="opacity-70">
              Sending a travel postcard to a loved one is truly a thoughtful
              gesture that can bring joy and inspiration. Inspiration can come
              in the form of taking a break from the normal routine, while being
              reminded of the more adventurous and exotic destinations around
              the world.
            </p>
          </div>
          {/* Add to cart line with quantity option*/}
        </div>
      </div>

      {/* Related postcards */}
      <div className="py-10">
        <h3 className="text-2xl font-semibold">Related Products</h3>
        <Postcards />
      </div>
    </section>
  );
};

export default page;
