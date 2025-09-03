import Link from "@/Components/Link";
import Logo from "@/Components/Logo";
import Title from "@/Components/Title";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EFF5E4] w-full pt-10 pb-6 mt-11 border-t border-gray-300">
      {/* Top: Logo + Considerações */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 px-4 sm:px-10 mb-10">
        <Link
          link="#"
          className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
        >
          <Logo className=" sm:w-20 sm:h-20" />
          <Title
            title="Indústria de Bioinsumos e Fertilizantes"
            className="text-black font-semibold"
            size="md"
          />
        </Link>

        <div className="text-gray-700 text-center sm:text-left">
          <p className="font-medium">Considerações importantes</p>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Middle: Links (sumir em telas pequenas) */}
      <div className="hidden sm:flex justify-between px-4 sm:px-10 gap-8 mb-10 flex-wrap">
        <div>
          <Title title="Sobre nós" size="sm" className="text-black mb-3" />
          <ul className="space-y-2">
            <li>
              <Link
                link="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Nossa história
              </Link>
            </li>
            <li>
              <Link
                link="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Equipe
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title title="Serviços" size="sm" className="text-black mb-3" />
          <ul className="space-y-2">
            <li>
              <Link
                link="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Consultoria
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title title="Contato" size="sm" className="text-black mb-3" />
          <ul className="space-y-2">
            <li>
              <Link
                link="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Email
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title title="Redes sociais" size="sm" className="text-black mb-3" />
          <div className="flex gap-4">
            <Link link="#">
              <FaInstagram
                className="text-pink-500 hover:text-pink-700 transition-colors"
                size={28}
              />
            </Link>
            <Link link="#">
              <FaWhatsapp
                className="text-green-500 hover:text-green-700 transition-colors"
                size={28}
              />
            </Link>
            <Link link="#">
              <FaFacebookSquare
                className="text-blue-500 hover:text-blue-700 transition-colors"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: copyright */}
      <div className="border-t border-gray-300 pt-6 text-center text-gray-600 text-sm px-4 sm:px-10">
        &copy; {new Date().getFullYear()} Indústria de Bioinsumos e
        Fertilizantes. Todos os direitos reservados.
      </div>
    </footer>
  );
}
