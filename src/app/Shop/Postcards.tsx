import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Postcards = () => {
  const postersData = [
    {
      img: "postCardV1.jpg",
      title: "PostCard V1",
      price: "$23.99",
    },
    {
      img: "postCardV2.jpg",
      title: "PostCard V2",
      price: "$23.99",
    },
    {
      img: "postCardV3.jpg",
      title: "PostCard V3",
      price: "$23.99",
    },
    {
      img: "postCardV4.jpg",
      title: "PostCard V4",
      price: "$23.99",
    },
    {
      img: "postCardV5.jpg",
      title: "PostCard V5",
      price: "$23.99",
    },
    {
      img: "postCardV6.jpg",
      title: "PostCard V6",
      price: "$23.99",
    },
    {
      img: "postCardV7.jpg",
      title: "PostCard V7",
      price: "$23.99",
    },
    {
      img: "postCardV8.jpg",
      title: "PostCard V8",
      price: "$23.99",
    },
    {
      img: "postCardV9.jpg",
      title: "PostCard V9",
      price: "$23.99",
    },
    {
      img: "postCardV10.jpg",
      title: "PostCard V10",
      price: "$23.99",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
      <p className="pt-10 opacity-65 md:hidden">{`Showing all ${postersData.length} results`}</p>
      {postersData.map((poster, index) => (
        <div key={index} className="py-4">
          <div className="relative group">
            <div className="cursor-pointer absolute right-2 top-5 p-1 rounded-full bg-white hidden group-hover:block group-hover:transition-all group-hover:duration-300 ">
              <ShoppingBag className="relative text-secondary" />
            </div>
            <Link href={`/product/${poster.title}`}>
              <img src={poster.img} alt={poster.title} />
            </Link>
          </div>
          <div className="mt-4 space-y-2">
            <Link href={`/product/${poster.title}`}>
              <p className="font-medium text-sm">{poster.title}</p>
            </Link>
            <p className="opacity-80 font-semibold">{poster.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Postcards;
