type CardContactProps = {
  title: string;
  text: string;
  icon?: React.ElementType;
};

export const CardContact = ({ title, text, icon: Icon }: CardContactProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition hover:shadow-xl hover:scale-105 duration-300">
      {Icon && (
        <div className="flex items-center justify-center rounded-full bg-indigo-100 p-4">
          <Icon aria-hidden="true" className="size-8 text-indigo-600" />
        </div>
      )}
      <dt className="mt-4 text-lg font-semibold text-gray-900 text-center">
        {title}
      </dt>
      <dd className="mt-2 text-base text-gray-600 text-center">{text}</dd>
    </div>
  );
};
