import FeatureTab from "./FeatureTab";

export default function Features() {
  const features = [
    {
      title: "Bookmark in one click",
      image: "/illustration-features-tab-1.png",
      buttonCta: "Try now",
      direction: "left",
    },
    {
      title: "Intelligent search",
      image: "/illustration-features-tab-2.png",
      buttonCta: "Search now",
      direction: "right",
    },
    {
      title: "Share your bookmarks",
      image: "/illustration-features-tab-3.png",
      buttonCta: "Share now",
      direction: "left",
    },
  ];
  return (
    <div className="mx-auto">
      <h2 className="text-3xl text-center text-bookmark-blue">Features:</h2>
      <p className="text-center text-bookmark-grey mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
      {/* Features Tabs */}
      {features.map((f, i) => (
        <FeatureTab key={i} {...f} />
      ))}
    </div>
  );
}
