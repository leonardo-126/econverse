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
    nome: "Rafael Costa",
    cargo: "Dev Frontend",
    descricao: "Desenvolve interfaces modernas e responsivas com React.",
    imagem: "https://randomuser.me/api/portraits/men/23.jpg",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
  {
    id: 5,
    nome: "Rafael Costa",
    cargo: "Dev Frontend",
    descricao: "Desenvolve interfaces modernas e responsivas com React.",
    imagem: "https://randomuser.me/api/portraits/men/23.jpg",
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
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const nextSlide = () => {
    if (currentIndex < squadData.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Nosso Squad</h2>

        {/* Wrapper principal com flexbox */}
        <div className="flex items-center gap-4">
          {/* Botão esquerdo */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
          >
            <IoIosArrowBack size={28} />
          </button>

          {/* Área dos cards */}
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (100 / itemsPerView) * currentIndex
                }%)`,
                width: `${(100 / itemsPerView) * squadData.length}%`,
              }}
            >
              {squadData.map((membro) => (
                <div
                  key={membro.id}
                  className="flex-shrink-0 px-2"
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
            className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
          >
            <IoIosArrowBack size={28} className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
