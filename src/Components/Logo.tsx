type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return <img className="h-12 " src="logo.png" alt="Logo" />;
}
