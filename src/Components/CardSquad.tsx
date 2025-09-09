import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export type SquadMember = {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  imagem: string;
  linkedin?: string;
  instagram?: string;
  whatsapp?: string;
};

type CardSquadProps = {
  membro: SquadMember;
};

export const CardSquad = ({ membro }: CardSquadProps) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group h-96 md:h-80 lg:h-96 transition-shadow duration-300 hover:shadow-2xl">
      {/* Imagem */}
      <img
        src={membro.imagem}
        alt={membro.nome}
        className="w-full h-full object-cover"
      />

      {/* Bloco fixo sempre visível */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-800">{membro.nome}</h3>
        <p className="text-indigo-600 font-medium">{membro.cargo}</p>

        {/* Descrição + redes: inicialmente escondidos */}
        <div
          className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 
                     group-hover:max-h-40 group-hover:opacity-100"
        >
          <p className="text-gray-600 text-sm mt-3 mb-4">{membro.descricao}</p>
          <div className="flex items-center justify-center w-full gap-4 text-xl text-indigo-600">
            {membro.linkedin && (
              <a href={membro.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-500 transition" />
              </a>
            )}
            {membro.instagram && (
              <a href={membro.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>
            )}
            {membro.whatsapp && (
              <a href={membro.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
