"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-nav backdrop-blur-sm z-[70] border-b-2 border-pink ${className}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow retro-text">
            Portfolio
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors font-semibold text-cyan ${
                  activeSection === item.href
                    ? "underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }`}
                onClick={() => setActiveSection(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-primary z-[90]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-[80] md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Close button in top right */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-pink transition-colors"
              aria-label="Close navigation"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col space-y-3 w-full">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-xl text-cyan transition-all duration-300 font-bold border-2 border-cyan rounded-xl px-6 py-4 transform hover:scale-[1.02] ${
                  activeSection === item.href
                    ? "bg-cyan/20"
                    : "hover:bg-cyan/10"
                } ${isOpen ? "mobile-menu-item" : ""}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
