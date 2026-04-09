"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/haestus-logo.png"
          alt="Haestus"
          width={140}
          height={32}
          className="h-6 w-auto"
          priority
        />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black/40">
          <a href="#solutions" className="hover:text-black transition-colors">
            Solutions
          </a>
          <a href="#roadmap" className="hover:text-black transition-colors">
            Roadmap
          </a>
          <a href="#pricing" className="hover:text-black transition-colors">
            Investment
          </a>
          <a href="#results" className="hover:text-black transition-colors">
            Results
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-black/80 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl hover:bg-black/5 flex items-center justify-center transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-black/5 px-6 py-4 space-y-3 bg-white">
          {["Solutions", "Roadmap", "Investment", "Results"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-black/50 hover:text-black transition-colors py-2"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 rounded-xl bg-black text-white font-medium mt-4"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
