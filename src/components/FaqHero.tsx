import questionMark from "../assets/question.svg";
const FaqHero = () => {
  return (
    <section className="p-6 ">
      <div className="bg-faqHero min-h-[573px] max-w-[1240px] mx-auto rounded-r-2xl rounded-bl-3xl flex items-center justify-center relative">
        {/* Question Mark */}
        <div className="absolute ">
          <img src={questionMark} alt="question mark" />
        </div>

        {/* Text */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-semibold">Have a Question?</h1>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
