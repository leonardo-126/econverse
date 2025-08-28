type LinkProps = {
  link: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Link({ link, className, children }: LinkProps) {
  return (
    <a
      href={link}
      className={`font-medium 
        underline-offset-4 
        hover:underline 
        transition-colors 
        duration-200
        text-sm sm:text-base lg:text-lg
        ${className}`}
    >
      {children}
    </a>
  );
}
