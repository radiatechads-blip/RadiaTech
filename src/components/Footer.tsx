"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/data/company";
import useCategoryLinks from "@/components/useCategoryLinks";

export default function Footer() {
  const productLinks = useCategoryLinks();

  return (
    <footer className="bg-gray-950 text-white">
      {/* Optimized height with balanced vertical spacing */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/LOGO.png" alt="Logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-base font-bold">Radiatech Electra</span>
            </div>
            <p className="text-blue-100 text-xs leading-relaxed mb-5 line-clamp-3">
              {companyInfo.about.short}
            </p>
            {/* Icons restored with correct SVG paths */}
            <div className="flex items-center gap-3">
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.32.06 2.21.28 2.99.58.82.32 1.41.71 2.01 1.31.6.6.99 1.19 1.31 2.01.3.78.52 1.67.58 2.99.06 2.66.07 3.04.07 4.85s-.01 2.19-.07 3.48c-.06 1.32-.28 2.21-.58 2.99-.32.82-.71 1.41-1.31 2.01-.6.6-1.19.99-2.01 1.31-.78.3-1.67.52-2.99.58-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.32-.06-2.21-.28-2.99-.58-.82-.32-1.41-.71-2.01-1.31-.6-.6-.99-1.19-1.31-2.01-.3-.78-.52-1.67-.58-2.99-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.32.28-2.21.58-2.99.32-.82.71-1.41 1.31-2.01.6-.6 1.19-.99 2.01-1.31.78-.3 1.67-.52 2.99-.58 1.27-.06 1.65-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.26-2.913.56-.787.306-1.455.714-2.11 1.369-.654.654-1.063 1.323-1.369 2.11-.3.765-.502 1.636-.56 2.913-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.26 2.148.56 2.913.306.787.714 1.455 1.369 2.11.654.654 1.323 1.063 2.11 1.369.765.3 1.636.502 2.913.56 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.148-.26 2.913-.56.787-.306 1.455-.714 2.11-1.369.654-.654 1.063-1.323 1.369-2.11.3-.765.502-1.636.56-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.26-2.148-.56-2.913-.306-.787-.714-1.455-1.369-2.11-.654-.654-1.323-1.063-2.11-1.369-.765-.3-1.636-.502-2.913-.56-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" /></svg>
              </a>

              <a href={companyInfo.social.indiamart} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all text-xs font-bold uppercase" aria-label="IndiaMART">
                IM
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 opacity-90">Links</h3>
            <ul className="space-y-2 text-xs text-blue-100">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 opacity-90">Products</h3>
            <ul className="space-y-2 text-xs text-blue-100">
              {productLinks.slice(0, 5).map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 opacity-90">Contact</h3>
            <ul className="space-y-3 text-xs text-blue-100">
              <li className="flex items-start gap-2"><MapPin size={16} className="text-accent shrink-0" /> {companyInfo.addresses[0].address}</li>
              <li><a href={`tel:${companyInfo.contact.phoneHref}`} className="flex items-center gap-2 hover:text-white"><Phone size={16} className="text-accent" /> {companyInfo.contact.phone}</a></li>
            </ul>
            <Link href="/contact" className="inline-block mt-4 bg-accent text-white px-4 py-2 rounded-lg text-xs font-bold uppercase">Inquiry</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-xs text-blue-200 text-center">
        &copy; {new Date().getFullYear()} {companyInfo.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
}
