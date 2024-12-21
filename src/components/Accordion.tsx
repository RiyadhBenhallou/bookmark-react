import { ChevronDown } from "lucide-react";

export default function Accordion({ question }: { question: string }) {
  return (
    <div className="flex iems-center border-b-2 px-2 py-4">
      <span className="text-sm text-bookmark-blue flex-1">{question}</span>
      <ChevronDown className="text-bookmark-purple" />
    </div>
  );
}
