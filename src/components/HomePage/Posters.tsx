import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { posters } from "@/components/index";

// const posterDetails = [
//   {
//     link: "poster-v1",
//     img: "/posterOne.jpg",
//     title: "Posters",
//     name: "Poster V1",
//     price: "$23.99",
//     id: 1,
//   },
//   {
//     link: "poster-v2",
//     img: "/posterTwo.jpg",
//     title: "Posters",
//     name: "Poster V2",
//     price: "$17.99",
//     id: 2,
//   },
//   {
//     link: "poster-v3",
//     img: "/posterThree.jpg",
//     title: "Posters",
//     name: "Poster V3",
//     price: "$14.99",
//     id: 3,
//   },
// ];

const Posters = () => {

  return (
    <section className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posters.map((poster, index) => (
        <Link href={`/product/${poster.link}`} key={index}>
          <div className="relative group">
            <div className="absolute right-2 top-5 p-1 rounded-full bg-white hidden group-hover:block group-hover:transition-all group-hover:duration-300 ">
              <ShoppingBag className="relative text-secondary" />
            </div>
            <img src={poster.img} alt={poster.name} />
          </div>
          <div className="pt-10 space-y-3">
            <p className="opacity-40">{poster.title}</p>
            <p className="">{poster.name}</p>
            <span className="opacity-85">{poster.price}</span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Posters;
