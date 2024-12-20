import CTAButtonPrimary from "./CTAButtonPrimary";
import CTAButtonSecondary from "./CTAButtonSecondary";

export default function Hero() {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center gap-12 mt-14 lg:mt-28">
      <div className="flex flex-col flex-1 items-center lg:items-start lg:w-1/2">
        <h2 className="text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
          A Simple Bookmark Manager
        </h2>
        <p className="text-bookmark-grey text-sm text-center lg:text-left mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          adipisci facere eum cupiditate vero rem ex aut eaque dignissimos
          deserunt nostrum temporibus.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <CTAButtonPrimary text="Get Started" />
          <CTAButtonSecondary text="How it works?" />
        </div>
      </div>
      <div className="flex justify-center flex-1 mb:10 lg:mb-0 z-10 lg:w-1/2">
        <img
          src="/hero-bg.png"
          className="w-4/5 h-4/5 md:w-full md:h-full"
          alt=""
        />
      </div>
    </div>
  );
}
