import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <section className="relative">
        <Hero />
        <div className="hidden md:block absolute -bottom-12 -right-0 bg-bookmark-purple overflow-hidden rounded-l-full h-60 w-2/4"></div>
      </section>
    </div>
  );
}
export default App;
