import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "./components/AboutHero";
import AboutEthos from "./components/AboutEthos";
import AboutMission from "./components/AboutMission";
import AboutPrinciples from "./components/AboutPrinciples";
import AboutPrinciplesSecond from "./components/AboutPrinciplesSecond";
import AboutSynergy from "./components/AboutSynergy";
import AboutWelcome from "./components/AboutWelcome";

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutEthos />
      <AboutMission />
      <AboutPrinciples />
      <AboutPrinciplesSecond />
      <AboutSynergy />
      <AboutWelcome />
      <Footer />
    </>
  );
}