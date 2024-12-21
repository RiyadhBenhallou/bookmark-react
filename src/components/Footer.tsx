import { Facebook, Twitch } from "lucide-react";

export default function Footer() {
  return (
    <div className="container flex flex-col md:flex-row items-center gap-y-8 justify-between">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center md:justify-start">
        <img src="/logo-bookmark-white.png" alt="" />
        <ul className="uppercase flex text-white text-xs gap-8">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">contact us</li>
          <li className="cursor-pointer">home</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-white">
        <Facebook className="cursor-pointer" />
        <Twitch className="cursor-pointer" />
      </div>
    </div>
  );
}
