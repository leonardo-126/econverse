import { JSX } from "react";

type MapaGoogleProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

export default function Maps({
  width = "100%",
  height = "100%",
  className = "w-full h-[450px] rounded-2xl shadow-lg border-0",
}: MapaGoogleProps): JSX.Element {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.0722769157345!2d-46.32103755560804!3d-22.319153405277824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c97b21dd96b601%3A0x45d71cb924742969!2sAv.%20Alvarenga%20Peixoto%2C%201234%2C%20Inconfidentes%20-%20MG%2C%2037576-000!5e1!3m2!1spt-BR!2sbr!4v1756854041674!5m2!1spt-BR!2sbr"
          width={width}
          height={height}
          className={className}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Onda decorativa embaixo 
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-24 text-green-50"
        >
          <path
            className="fill-current"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
              c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6
              C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          />
        </svg>
        
      </div>
      */}
    </section>
  );
}
