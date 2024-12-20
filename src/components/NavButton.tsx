export default function NavButton({ text }: { text: string }) {
  return (
    <button className="bg-bookmark-red px-7 py-3 rounded text-white uppercase hover:bg-bookmark-red/80 transition-colors duration-300">
      {text}
    </button>
  );
}
