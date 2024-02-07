import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 flex flex-wrap justify-between pt-[124px]">
        <div className="h-[1px] w-full bg-black"></div>
        <div className="h-[100px] w-full bg-slate-300"></div>
        <div className="h-[800px] w-10 bg-slate-300"></div>
      </div>
      <Footer />
    </div>
  );
}
