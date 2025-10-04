"use client";
import { CardSquad, SquadMember } from "@/Components/CardSquad";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const squadData: SquadMember[] = [
  {
    id: 1,
    nome: "Lucas Pereira",
    cargo: "Product Owner",
    descricao: "Responsável pela visão do produto e priorização do backlog.",
    imagem: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
  {
    id: 2,
    nome: "Fernanda Oliveira",
    cargo: "Scrum Master",
    descricao: "Facilita as cerimônias ágeis e remove impedimentos da equipe.",
    imagem: "https://randomuser.me/api/portraits/women/33.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
  {
    id: 3,
    nome: "Rafael Costa",
    cargo: "Dev Frontend",
    descricao: "Desenvolve interfaces modernas e responsivas com React.",
    imagem: "https://randomuser.me/api/portraits/men/23.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
  {
    id: 4,
    nome: "Mariana Silva",
    cargo: "UX Designer",
    descricao: "Cria experiências intuitivas e agradáveis para os usuários.",
    imagem: "https://randomuser.me/api/portraits/women/25.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
  {
    id: 5,
    nome: "João Pedro",
    cargo: "Dev Backend",
    descricao: "Constrói APIs escaláveis e de alta performance.",
    imagem: "https://randomuser.me/api/portraits/men/55.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
];

export const Squad = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // celular
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // tablet
      } else {
        setItemsPerView(3); // desktop
      }
      setCurrentIndex(0); // reset ao redimensionar
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const nextSlide = () => {
    const maxIndex = squadData.length - itemsPerView;
    const newIndex = Math.min(currentIndex + itemsPerView, maxIndex);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - itemsPerView, 0);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Nosso Squad</h2>

        <div className="flex items-center gap-4">
          {/* Botão esquerdo */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="flex items-center justify-center 
                       bg-white/70 backdrop-blur-md shadow-lg
                       border border-gray-200
                       text-gray-800 rounded-full 
                       disabled:opacity-40 
                       transition-all duration-300 
                       hover:scale-110 hover:bg-white
                       w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
          >
            <IoIosArrowBack size={22} />
          </button>

          {/* Área dos cards */}
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (100 / squadData.length) * currentIndex
                }%)`,
                width: `${(100 / itemsPerView) * squadData.length}%`,
              }}
            >
              {squadData.map((membro) => (
                <div
                  key={membro.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / squadData.length}%` }}
                >
                  <CardSquad membro={membro} />
                </div>
              ))}
            </div>
          </div>

          {/* Botão direito */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= squadData.length - itemsPerView}
            className="flex items-center justify-center 
                       bg-white/70 backdrop-blur-md shadow-lg
                       border border-gray-200
                       text-gray-800 rounded-full 
                       disabled:opacity-40 
                       transition-all duration-300 
                       hover:scale-110 hover:bg-white
                       w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
          >
            <IoIosArrowBack size={22} className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
