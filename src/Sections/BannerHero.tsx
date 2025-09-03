import Title from "@/Components/Title";

export default function BannerHero() {
  return (
    <section className="relative bg-[url(/bg-image.png)] bg-cover bg-center bg-fixed min-h-[650px] flex items-center justify-end">
      {/* overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/60" />

      {/* conteúdo */}
      <div className="relative z-10 p-10 text-right">
        <Title title="aaaaaaaaaa" size="xl" className="text-white" />
        <p className="text-white mt-4 max-w-lg">
          Agora o texto fica acima do gradiente
        </p>
      </div>

      {/* borda de cima 
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-20 text-white"
        >
          <path
            className="fill-current"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </div>
      */}

      {/* borda de baixo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-20 text-white"
        >
          <path
            className="fill-current"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
