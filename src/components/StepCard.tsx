import React from "react";

interface StepCardProps {
  id: number;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({ id, text }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md flex items-start gap-4 w-full min-h-[150px]">
      <div className="w-8 h-8 flex items-center justify-center bg-[#131D26] text-[#F6D155] rounded-full text-lg font-bold">
        {id}
      </div>
      <p className="text-black text-[20px] text-left font-semibold">{text}</p>
    </div>
  );
};

export default StepCard;


