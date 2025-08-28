import AppLayout from "@/Layouts/AppLayout";
import BannerHero from "@/Sections/BannerHero";
import SendEmail from "@/Sections/SendEmail";

export default function Home() {
  return (
    <AppLayout>
      <BannerHero />
      <SendEmail />
      <div></div>
    </AppLayout>
  );
}
