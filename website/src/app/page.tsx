import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:pt-[124px] pt-[152px]" />
      <MainView />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
