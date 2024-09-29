const Cta = () => {
    return (
      <>
        {/* CTA */}
        <div className=" container mx-auto faq w-full flex flex-col items-center py-8 mt-24 bg-[#F0F0F0]">
          <div className="max-w-[600px] mx-auto my-4 flex flex-col gap-4 items-center">
            <h3 className="text-2xl font-semibold">
              So, what are you waiting for
            </h3>
            <p className="text-center max-w-64">
              Download our Chrome extension and get started today!
            </p>
            <div className="buyyons flex items-center justify-between gap-4">
              <button className="text-[#F6D155] bg-[#131D26] py-2 px-4 rounded-md cursor-pointer hover:text-[#131D26] hover:bg-[#F6D155]">
                info@cloutra.com &rarr;
              </button>
              <button className="hover:text-[#F6D155] hover:bg-[#131D26] py-2 px-4 rounded-md cursor-pointer text-[#131D26] bg-[#F6D155]">
                Download Chrome Extension
              </button>
            </div>
          </div>
        </div>
        ;
      </>
    );
  };
  export default Cta;