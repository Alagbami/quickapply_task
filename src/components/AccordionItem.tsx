// AccordionItem.tsx

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionProps) => {
  return (
    <div className="bg-[#F0F0F0] p-4 rounded-lg">
      <button
        className="w-full text-left px-4 py-2  flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-lg  font-medium">{question}</span>
        <span className="text-[1rem]">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-1000" : "grid-rows-[0] opacity-0"
        }`}
      >
        <p className=" text-lg overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
