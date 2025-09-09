import { CardService } from "@/Components/CardService";
import { FaSeedling, FaStore, FaTools, FaTractor } from "react-icons/fa";

export default function Services() {
  // Mock de dados
  const services = [
    {
      title: "Consultoria Agrícola",
      text: "Ajudamos produtores a alcançarem melhores resultados com práticas modernas e sustentáveis.",
      icon: FaSeedling,
    },
    {
      title: "Venda de Máquinas",
      text: "Equipamentos agrícolas de última geração para aumentar sua produtividade.",
      icon: FaTractor,
    },
    {
      title: "Loja de Insumos",
      text: "Tudo que você precisa para sua lavoura em um só lugar: sementes, defensivos e adubos.",
      icon: FaStore,
    },
    {
      title: "Manutenção Técnica",
      text: "Assistência especializada em máquinas e implementos agrícolas.",
      icon: FaTools,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Texto de contexto */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Nossos Serviços
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Há mais de{" "}
          <span className="font-semibold text-green-700">10 anos</span>
          no mercado, oferecemos soluções completas para o setor agrícola,
          ajudando nossos clientes a crescer com inovação e confiança.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              text={service.text}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/loja"
            className="inline-block rounded-xl bg-green-700 px-6 py-3 text-white font-semibold shadow-md hover:bg-green-600 transition"
          >
            Leve-me à loja
          </a>
        </div>
      </div>
    </section>
  );
}
