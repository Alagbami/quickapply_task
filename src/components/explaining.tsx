// Accordion.tsx
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqData";

const Accordion = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  // This function runs when someone clicks on a question
  const handleQuestionClick = (index: number) => {
    // If the same question is clicked again, close it (set to null)
    // else, open the clicked question by setting its index
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null); // Close it if it's already open
    } else {
      setOpenQuestionIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openQuestionIndex === index} // Check if this question should be open
          onClick={() => handleQuestionClick(index)} // Handle click events
        />
      ))}
    </div>
  );
};

export default Accordion;
