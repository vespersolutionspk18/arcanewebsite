
import Hero from "./homecomponents/Hero";
import AboutUs from "./homecomponents/AboutUs";
import AboutUsAfter from "./homecomponents/AboutUsAfter";
import Header from "@/components/Header";
import OurDuty from "./homecomponents/OurDuty";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <AboutUs />
    <AboutUsAfter />
    <OurDuty />
    </>
  );
}
