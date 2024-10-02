// src/components/StepsList.tsx
import React from "react";
import { stepsDataTailor } from "../data/generalData";
import StepCard from "./StepCard";

const StepsListTailor: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-lg font-bold mb-6 text-left">Here's how:</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {stepsDataTailor.map((step) => (
          <StepCard key={step.id} id={step.id} text={step.text} />
        ))}
      </div>
    </div> 
  );
};

export default StepsListTailor;

