type CardServiceProps = {
  title: string;
  text: string;
  icon?: React.ElementType;
};

export const CardService = ({ title, text, icon: Icon }: CardServiceProps) => {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition hover:shadow-xl hover:scale-105 duration-300">
      {Icon && (
        <div className="flex items-center justify-center rounded-full bg-green-100 p-4">
          <Icon aria-hidden="true" className="size-8 text-green-600" />
        </div>
      )}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{text}</p>
    </div>
  );
};
