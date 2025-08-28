type TitleProps = {
  title: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Title({
  title,
  className = "",
  size = "md",
}: TitleProps) {
  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  };

  return (
    <h2
      className={`
        ${sizeClasses[size]}
        font-semibold
        ${className}
      `}
    >
      {title}
    </h2>
  );
}
