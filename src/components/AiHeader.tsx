import React from "react";

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void; // Handler for button click
}

const AiHeader: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="container mx-auto max-w-2xl text-center py-16 bg-transparent">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      {/* Subtitle with limited width */}
      <p
        className="text-gray-600 text-lg mb-6"  // Limits the width and centers it
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="bg-[#131D26] text-[#F6D155] px-6 py-3 rounded-md hover:bg-[#F6D155] hover:text-[#131D26] font-semibold"
      >
        {buttonText} &rarr;
      </button>
    </div>
  );
};

export default AiHeader;


