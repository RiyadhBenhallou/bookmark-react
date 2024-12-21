import DownloadCard from "./DownloadCard";

export default function Download() {
  const downloadCards = [
    {
      title: "Add to Chrome",
      image: "/logo-chrome.svg",
      buttonCta: "Add & Install Extension",
      offset: "lg:mt-0",
    },
    {
      title: "Add to Firefox",
      image: "/logo-firefox.svg",
      buttonCta: "Add & Install Extension",
      offset: "lg:mt-8",
    },
    {
      title: "Add to Opera",
      image: "/logo-opera.svg",
      buttonCta: "Add & Install Extension",
      offset: "lg:mt-16",
    },
  ];
  return (
    <div className="mx-auto">
      <h2 className="text-3xl text-center text-bookmark-blue">
        Download the extension:
      </h2>
      <p className="text-center text-bookmark-grey mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start mt-12">
        {downloadCards.map((c, i) => (
          <DownloadCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
}
