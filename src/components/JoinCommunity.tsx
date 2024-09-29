import React from 'react';

const JoinCommunity: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-800 to-purple-600 py-16 flex justify-center items-center">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg max-w-lg text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">Come join us!</h2>
        <p className="text-gray-300 mb-6">
          Join the QuickApply community and stay up to date with new and important updates from us
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition">
          Join Discord Community
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
