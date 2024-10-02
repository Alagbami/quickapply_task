import React from "react";
import { stepsDataBuild } from "../data/generalData";
import StepCard from "./StepCard";

const StepsListBuild: React.FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-lg font-bold mb-6 text-left">Here's how:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stepsDataBuild.map((step) => (
          <StepCard key={step.id} id={step.id} text={step.text} />
        ))}
      </div>
    </div>
  );
};

export default StepsListBuild;
