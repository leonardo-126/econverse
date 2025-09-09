export const AboutCompany = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Sobre a Nossa Empresa
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Somos uma empresa dedicada a oferecer soluções inovadoras para
            nossos clientes. Com uma equipe apaixonada por tecnologia e
            inovação, buscamos sempre entregar qualidade, confiança e resultados
            que fazem a diferença.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Nosso objetivo é crescer lado a lado com nossos parceiros e
            clientes, construindo um futuro mais conectado, sustentável e
            eficiente.
          </p>

          {/* Botão */}
          <div className="mt-6">
            <a
              href="#contato"
              className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Imagem ilustrativa */}
        <div className="flex justify-center">
          <img
            src="/sobre.png"
            alt="Sobre a empresa"
            className="rounded-2xl shadow-lg max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
