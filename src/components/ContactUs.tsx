export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <p className="text-center uppercase font-liht text-bookmark-white">
        +35.000 New User!
      </p>
      <h1 className="text-2xl font-bold text-center mb-8">
        Stay up-to-date with what we're doing
      </h1>
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 mt-4 md:mt-6">
        <input
          type="text"
          placeholder="Enter you E-mail address"
          className="px-3 py-2 rounded-md flex-1 focus:outline-none placeholder:text-sm text-black"
        />
        <button className="bg-bookmark-red px-3 py-2 rounded-lg hover:bg-bookmark-red/80">
          Contact Us!
        </button>
      </div>
    </div>
  );
}
