"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use react-icons if you prefer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.jpeg" 
            alt="Multiperi Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl font-black tracking-wide">
            MULTIPERI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-red-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link 
            href="#tickets"
            className="ml-4 px-5 py-2.5 bg-red-600 hover:bg-red-700 hover:scale-105 font-bold rounded-lg transition"
          >
            Purchase Ticket
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-zinc-900 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-zinc-300 hover:text-red-500 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#tickets"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-5 py-3 bg-red-600 hover:bg-red-700 font-bold rounded-lg transition"
          >
            Purchase Ticket
          </Link>
        </div>
      )}
    </header>
  )
}