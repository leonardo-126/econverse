import { CardContact } from "@/Components/CardContact";
import { FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export const Contact = () => {
  const contact = [
    {
      title: "Email",
      text: "contato@exemplo.com",
      icon: MdOutlineMarkEmailUnread,
    },
    {
      title: "Telefone",
      text: "+55 (11) 99999-9999",
      icon: FaPhoneAlt,
    },
    {
      title: "Endereço",
      text: "Av. Paulista, 1000 - São Paulo, SP",
      icon: FaSearchLocation,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Entre em Contato</h1>
        <p className="mt-2 text-lg text-gray-600">
          Estamos sempre disponíveis para ajudar você. Fale conosco!
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contact.map((item, index) => (
            <CardContact
              key={index}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
