import CardInfo from "@/Components/CardInfo";
import { HiOutlineCalendarDays, HiOutlineHandRaised } from "react-icons/hi2";

export default function SendEmail() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Assine nossa newsletter agrícola
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Receba conteúdos semanais sobre agricultura, novas tecnologias no
              campo, dicas de cultivo e novidades do setor direto no seu e-mail.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Digite seu e-mail"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Assinar
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <CardInfo
              icon={HiOutlineCalendarDays}
              title="Conteúdos semanais"
              text="Artigos e dicas atualizadas sobre boas práticas agrícolas,
                gestão rural e inovações no campo."
            />
            <CardInfo
              icon={HiOutlineHandRaised}
              title="Sem spam"
              text="Você receberá apenas informações relevantes para a agricultura,
                de forma clara e objetiva."
            />
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#a7f3d0] to-[#34d399] opacity-20"
        />
      </div>
    </div>
  );
}
