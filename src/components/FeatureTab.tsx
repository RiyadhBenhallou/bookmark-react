import CTAButtonPrimary from "./CTAButtonPrimary";

export default function FeatureTab({
  title,
  image,
  buttonCta,
  direction,
}: {
  title: string;
  image: string;
  buttonCta: string;
  direction: string;
}) {
  return (
    <div className="relative">
      <div
        className={`container flex flex-col md:flex-row${
          direction === "left" ? "-reverse" : ""
        } items-center justify-center gap-x-20 mt-16`}
      >
        <div className="flex flex-1 justify-center w-1/2">
          <img
            src={`${image}`}
            className="w-5/6 h-5/6 md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-4/5 z-10"
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-1 flex-col gap-y-6 items-center lg:items-start mt-10 md:mt-0">
          <h2 className="text-center text-3xl text-bookmark-blue">{title}</h2>
          <p className="text-sm text-center md:text-start text-bookmark-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            distinctio delectus porro ipsam officiis tempore rerum ab
          </p>
          <CTAButtonPrimary text={buttonCta} />
        </div>
        {/* <div className="hidden md:block absolute -bottom-12 -left-0 bg-bookmark-purple overflow-hidden rounded-r-full h-36 lg:h-60 w-2/4"></div> */}
      </div>
      <div
        className={`hidden md:block absolute -bottom-12 -${
          direction === "left" ? "right" : "left"
        }-0 bg-bookmark-purple overflow-hidden rounded-${
          direction === "left" ? "l" : "r"
        }-full h-36 lg:h-60 w-2/4`}
      ></div>
    </div>
  );
}
