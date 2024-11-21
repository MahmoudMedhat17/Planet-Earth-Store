import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const yearlyDate = date.getFullYear();

  const footerContent = [
    {
      title: "Home",
      link: "/Home",
    },
    {
      title: "About",
      link: "/About",
    },
    {
      title: "Shop",
      link: "/Shop",
    },
    {
      title: "Contact",
      link: "/Contact",
    },
  ];

  return (
    <section className="mt-10 md:mt-20 grid grid-cols-1 lg:grid-cols-3 place-items-center md:border-t-[1px] md:border-gray-300 ">
      <ul className="md:flex justify-center items-center gap-8 md:py-8">
        {footerContent.map((footer, index) => (
          <li key={index}>
            <Link
              href={footer.link}
              className="flex justify-center items-center py-2 text-sm hover:text-primary hover:duration-300"
            >
              {footer.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <img src="logo.png" alt="Logo" className="w-44 mx-auto block my-10" />
      </Link>
      <p className="text-center tracking-wider">
        Copyright © {yearlyDate} Planet Earth Store
      </p>
    </section>
  );
};

export default Footer;
