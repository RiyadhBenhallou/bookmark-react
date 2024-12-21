import ContactUs from "./components/ContactUs";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <section className="relative mb-20 lg:mb-60">
        <Hero />
        <div className="hidden md:block absolute -bottom-12 -right-0 bg-bookmark-purple overflow-hidden rounded-l-full h-60 w-2/4"></div>
      </section>
      <section className="bg-bookmark-white py-20 overflow-hidden">
        <Features />
      </section>
      <section className="py-10 mt-10">
        <Download />
      </section>
      <section className="py-20 mt-10 bg-bookmark-white">
        <FAQ />
      </section>
      <section className="py-20 mt-10 bg-bookmark-purple text-white">
        <ContactUs />
      </section>
    </div>
  );
}
export default App;
