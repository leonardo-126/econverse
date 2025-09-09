import AppLayout from "@/Layouts/AppLayout";
import { AboutCompany } from "@/Sections/AboutCompany";
import BannerHero from "@/Sections/BannerHero";
import { Contact } from "@/Sections/Contact";
import Maps from "@/Sections/Maps";
import SendEmail from "@/Sections/SendEmail";
import Services from "@/Sections/Services";
import { Squad } from "@/Sections/Squad";

export default function Home() {
  return (
    <AppLayout>
      <BannerHero />
      <Services />
      <SendEmail />
      <Contact />
      <Squad />
      <Maps />
      <AboutCompany />
    </AppLayout>
  );
}
