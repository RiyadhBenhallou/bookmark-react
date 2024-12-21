import Accordion from "./Accordion";

export default function FAQ() {
  const questions = [
    {
      question: "What is Bookmark?",
    },
    {
      question: "How can I request a new browser?",
    },
    {
      question: "Is there a mobile app?",
    },
    {
      question: "What about other Chromium browsers?",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-3xl text-center text-bookmark-blue">FAQ:</h2>
      <p className="text-center text-bookmark-grey mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-col sm:w-3/5 lg:w-5/12 mx-auto mt-12">
        {questions.map((q, i) => (
          <Accordion key={i} {...q} />
        ))}
        <button className="bg-bookmark-purple self-center mt-12 px-5 py-2 rounded shadow-md text-white hover:bg-bookmark-purple/80 transition-colors duration-300">
          Try Now!
        </button>
      </div>
    </div>
  );
}
