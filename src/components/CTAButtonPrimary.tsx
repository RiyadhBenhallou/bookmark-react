export default function CTAButtonPrimary({ text }: { text: string }) {
  return (
    <button className="bg-bookmark-purple px-5 py-2 rounded shadow-md text-white hover:bg-bookmark-purple/80 transition-colors duration-300">
      {text}
    </button>
  );
}
