import { useState } from "react";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-dark-glassmorphism dark:border-dark-300 dark:border-opacity-20 py-4 sm:py-0 z-[10000]">
        <nav className="mobile-header-dark max-w-[90%] sm:max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12 sm:h-16">
          {/* logo */}
          <div className=""></div>

          {/* link-cta */}
          <div className="flex items-center justify-center gap-6">
            <ul className="hidden sm:flex gap-6"></ul>
            <div className="flex items-center justify-center gap-4">
              <div className="text-2xl"></div>
              <button className="hidden sm:flex bg-dark-1000 dark:bg-light-1000 text-light-1000 dark:text-dark-1000 px-4 py-2 rounded-xl">
                Download CV
              </button>

              {/* hamburger */}
              <div
                onClick={toggleMenu}
                className="sm:hidden relative h-6 w-6 flex justify-center items-center z-50"
              >
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute -translate-y-1.5" />
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute" />
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute translate-y-1.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <nav
        className={`fixed inset-0 z-[10000] transition-transform duration-300 transform ${
          isOpen ? "slide-in" : "slide-out"
        }`}
      ></nav>
    </>
  );
};

export default Header;
