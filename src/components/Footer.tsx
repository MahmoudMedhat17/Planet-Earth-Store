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
    <section className="my-10 grid grid-cols-1 lg:grid-cols-3 place-items-center">
      <ul className="md:flex justify-center items-center gap-8">
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
      <p className="text-center">Copyright © {yearlyDate} Planet Earth Store</p>
    </section>
  );
};

export default Footer;
