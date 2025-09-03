type LinkProps = {
  link: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Link({
  link,
  className,
  children,
  onClick,
}: LinkProps) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`font-medium 
        underline-offset-4 
        transition-colors 
        duration-200
        text-sm sm:text-base lg:text-lg
        ${className}`}
    >
      {children}
    </a>
  );
}
