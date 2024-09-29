import React from 'react';
import { format } from 'date-fns'; 

const PostHeader: React.FC = () => {

  const today = format(new Date(), 'MMMM do, yyyy');

  return (
    <header className="container mx-auto bg-white py-8 text-center">
      {/* Dynamic Date */}
      <p className="text-gray-500 mb-2">{today}</p>
    
      <h1 className="text-3xl font-bold text-black mb-4">How to make QuickApply work efficiently for you</h1>
    
      <div className="flex w-full max-w justify-center">
        <img
          src="/src/assets/robot-image.png" 
          alt="QuickApply AI"
          className="w-full max-w-3xl object-cover"
        />
      </div>
    </header>
  );
};

export default PostHeader;
