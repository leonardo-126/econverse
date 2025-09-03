import Footer from "@/Sections/Footer";
import Nav from "@/Sections/Nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navegação fixa no topo */}
      <Nav />

      {/* Conteúdo principal */}
      <main className="">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
