"use client";

import Link from "@/Components/Link";
import Logo from "@/Components/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/services" },
    { name: "Produtos", href: "/products" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <nav
      className={`w-full z-50 top-0 transition-all duration-300 
        ${
          scrolled
            ? "fixed bg-white/20 backdrop-blur-md shadow-md"
            : "absolute bg-transparent"
        }
      `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          link="/"
          className="flex flex-col items-center text-center space-y-2"
        >
          <Logo />
        </Link>

        {/* Carrinho */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 
                       focus:outline-none focus:ring-green-300 font-medium rounded-lg 
                       text-sm px-4 py-2 text-center"
          >
            Vai ficar o carrinho aqui
          </button>
        </div>

        {/* Menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg 
                         bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
                         md:border-0 md:bg-transparent"
          >
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  link={item.href}
                  className={`block py-2 px-3 rounded-sm md:p-0 transition-colors duration-200
                    ${
                      pathname === item.href
                        ? "text-green-700 font-semibold"
                        : `hover:text-green-700 ${
                            scrolled ? "text-gray-900" : "text-white"
                          }`
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
