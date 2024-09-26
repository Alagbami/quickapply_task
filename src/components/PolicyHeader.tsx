import React from "react";

interface PolicyHeaderProps {
  title: string;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title }) => {
  return (
    <header className="bg-policyBg text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
      </div>
    </header>
  );
};

export default PolicyHeader;
