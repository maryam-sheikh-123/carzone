"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-white">CarZone</span>
              <span className="text-[#22c55e]">PK</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#22c55e] transition-colors font-medium">Home</Link>
            <Link href="/browse" className="text-white hover:text-[#22c55e] transition-colors font-medium">Browse Cars</Link>
            <Link href="/post-ad" className="text-white hover:text-[#22c55e] transition-colors font-medium">Post Ad</Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-white border border-[#1f1f1f] hover:border-[#22c55e] px-4 py-2 rounded-md transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#22c55e] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#1f1f1f]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#22c55e] hover:bg-[#1f1f1f]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/browse" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#22c55e] hover:bg-[#1f1f1f]"
              onClick={() => setIsOpen(false)}
            >
              Browse Cars
            </Link>
            <Link 
              href="/post-ad" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#22c55e] hover:bg-[#1f1f1f]"
              onClick={() => setIsOpen(false)}
            >
              Post Ad
            </Link>
            <div className="flex flex-col space-y-2 mt-4 px-3">
              <Link 
                href="/login" 
                className="w-full text-center text-white border border-[#1f1f1f] hover:border-[#22c55e] px-4 py-2 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="w-full text-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
