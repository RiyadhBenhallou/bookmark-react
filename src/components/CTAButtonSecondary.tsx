export default function CTAButtonSecondary({ text }: { text: string }) {
  return (
    <button className="bg-bookmark-white px-5 py-2 rounded shadow-md text-black hover:bg-bookmark-white/80 transition-colors duration-300">
      {text}
    </button>
  );
}
