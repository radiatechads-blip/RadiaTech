"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={() => setIsOpen(false)} 
      />
      
      {/* Popup Content */}
      <div className="relative bg-white p-2 rounded-3xl shadow-2xl max-w-lg w-full animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image 
            src="/images/Popup-Banner.png"
            alt="Promotion"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
