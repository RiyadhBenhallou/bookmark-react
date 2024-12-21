import CTAButtonPrimary from "./CTAButtonPrimary";

export default function DownloadCard({
  title,
  image,
  buttonCta,
  offset,
}: {
  title: string;
  image: string;
  buttonCta: string;
  offset: string;
}) {
  return (
    <div
      className={
        "flex flex-col px-3 py-8 items-center rounded-lg shadow-lg gap-8 " +
        offset
      }
    >
      <div className="flex flex-col items-center">
        <img src={image} className="w-24 h-24 mb-6" alt="" />
        <h3 className="text-bookmark-blue text-lg mb-2">{title}</h3>
        <p className="font-light text-sm text-center text-bookmark-grey">
          A clean and simple interface to organize your favourite websites, Try
          it for free.
        </p>
      </div>
      <div className="">
        <CTAButtonPrimary text={buttonCta} />
      </div>
    </div>
  );
}
