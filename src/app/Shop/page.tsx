import Searchbar from "./Searchbar";
import Postcards from "./Postcards";

const page = () => {
  return (
    <section className="pt-40 px-8">
      <Searchbar />
      <div className="space-y-4 pt-10">
        <h3 className="opacity-60">Home / Shop</h3>
        <h2 className="text-secondary text-5xl">Shop</h2>
        <Postcards />
      </div>
    </section>
  );
};

export default page;
