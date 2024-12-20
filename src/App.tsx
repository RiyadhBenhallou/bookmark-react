import Features from "./components/Features";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <section className="relative mb-20 lg:mb-60">
        <Hero />
        <div className="hidden md:block absolute -bottom-12 -right-0 bg-bookmark-purple overflow-hidden rounded-l-full h-60 w-2/4"></div>
      </section>
      <section className="bg-bookmark-white py-20">
        <Features />
      </section>
    </div>
  );
}
export default App;
