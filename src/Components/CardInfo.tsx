type CardInfoProps = {
  title: string;
  text: string;
  icon?: React.ElementType;
};
export default function CardInfo({ title, text, icon: Icon }: CardInfoProps) {
  return (
    <div className="flex flex-col items-start">
      {Icon && (
        <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
          <Icon aria-hidden="true" className="size-6 text-gray-600" />
        </div>
      )}
      <dt className="mt-4 text-base font-semibold text-gray-900">{title}</dt>
      <dd className="mt-2 text-base/7 text-gray-600">{text}</dd>
    </div>
  );
}
