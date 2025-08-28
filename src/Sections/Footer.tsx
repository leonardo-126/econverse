import Link from "@/Components/Link";
import Title from "@/Components/Title";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EFF5E4] p-6 mt-11 ">
      {/* Div sempre visível */}
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <div>
          <Link link="#" className="text-green-700 hover:underline">
            aaaaaaa
          </Link>
        </div>
        <div>{/* você pode adicionar mais links aqui */}</div>
      </div>

      {/* Div que deve sumir em telas pequenas */}
      <div className="hidden sm:flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <Title title="Sobre nós" size="sm" className="text-black-600 mb-2" />
          <ul className="space-y-1">
            <li>
              <Link link="#" className="text-gray-600 hover:underline">
                Nossa história
              </Link>
            </li>
            <li>
              <Link link="#" className="text-green-700 hover:underline">
                Equipe
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title title="Serviços" size="sm" className="text-black-600 mb-2" />
          <ul className="space-y-1">
            <li>
              <Link link="#" className="text-green-700 hover:underline">
                Consultoria
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title title="Contato" size="sm" className="text-black-600 mb-2" />
          <ul className="space-y-1">
            <li>
              <Link link="#" className="text-green-700 hover:underline">
                Email
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Title
            title="Redes sociais"
            size="sm"
            className="text-black-600 mb-2"
          />
          <div className="space-y-1 gap-2 sm:flex flex-col sm:flex-row justify-center">
            <Link link="#" className="hover:underline">
              <FaInstagram
                className="text-pink-500 hover:text-pink-800 transition-colors duration-300"
                size={30}
              />
            </Link>
            <Link link="#" className="hover:underline">
              <FaWhatsapp
                className="text-green-500 hover:text-green-700 transition-colors duration-300"
                size={30}
              />
            </Link>
            <Link link="#" className="hover:underline">
              <FaFacebookSquare
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
