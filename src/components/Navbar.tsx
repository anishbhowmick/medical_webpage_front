import React from 'react';
import { Stethoscope, X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSignIn = () => {
    window.location.href = 'https://medical-webpage-signin.vercel.app/';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Pill-Pals+</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#team" className="text-gray-600 hover:text-blue-600">Team</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            <button
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#team" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Team</a>
            <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-blue-600">FAQ</a>
            <button
              onClick={handleSignIn}
              className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}