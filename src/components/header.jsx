import React, { useState } from "react";
import { Menu, X, Briefcase } from "lucide-react";

const Header = ({ onSignupClick = () => {} }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "home", label: "Home" },
    { path: "about", label: "About Us" },
    { path: "whyrid", label: "Why RID" },
    { path: "contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
      <div className="w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo on left */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="bg-[#181ed4] p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#181ed4]">RID</span>
            </a>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className="text-[#181ed4] hover:text-white transition-colors duration-300 font-medium relative group px-2 py-1 rounded hover:bg-[#181ed4]/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSignupClick}
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => alert("Login page coming soon!")}
              className="hidden sm:inline-flex items-center bg-white text-blue-600 border border-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
            >
              Login
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onSignupClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  alert("Login page coming soon!");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 inline-flex items-center bg-white text-blue-600 border border-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
