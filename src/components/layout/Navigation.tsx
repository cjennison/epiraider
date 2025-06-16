"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/game", label: "Practice" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg">🐧</span>
            </div>
            <span className="text-gradient">EpiRaider</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface/50 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/game" className="btn btn-primary">
              Start Practicing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transform transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transform transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface/50 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/game"
                className="btn btn-primary w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Practicing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
