type TextProps = {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Text({ text, className, size = "md" }: TextProps) {
  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  };
  return (
    <span
      className={` ${sizeClasses[size]} text-gray-800 dark:text-gray-200 text-base font-medium ${className}`}
    >
      {text}
    </span>
  );
}
