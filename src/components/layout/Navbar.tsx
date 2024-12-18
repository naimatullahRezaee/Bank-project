import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-900" />
            <span className="font-bold text-xl text-blue-900">
              Digital Bank
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-blue-900 underline decoration-2 underline-offset-4"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm">
              Login
            </Button>
            <Button variant="secondary" size="sm">
              Signup
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? "text-blue-900 underline decoration-2 underline-offset-4"
                    : "text-gray-700 hover:text-blue-900 hover:underline hover:decoration-2 hover:underline-offset-4"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button variant="primary" size="sm" className="w-full mb-2">
                Login
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                Signup
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
