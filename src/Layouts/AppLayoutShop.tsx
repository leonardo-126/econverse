import Footer from "@/Sections/Footer";
import NavShop from "@/Sections/NavShop";

export default function AppLayoutShop({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navegação fixa no topo */}
      <NavShop />

      {/* Conteúdo principal */}
      <main className="">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
