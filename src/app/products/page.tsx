import AppLayoutShop from "@/Layouts/AppLayoutShop";
import BannerHero from "@/Sections/BannerHero";
import { Contact } from "@/Sections/Contact";
import SendEmail from "@/Sections/SendEmail";
import Services from "@/Sections/Services";

export default function Products() {
  return (
    <AppLayoutShop>
      <BannerHero />
      <Services />
      <SendEmail />
      <Contact />
    </AppLayoutShop>
  );
}
