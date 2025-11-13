"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999999999] transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-[10px] py-6' : 'bg-white py-8'
      }`}
    >
      <div className="px-8 flex justify-between items-center transition-all duration-300">
        <div className={`text-2xl font-bold ${scrolled ? 'text-black' : 'text-black'}`}>
            <Link href="/">
                {/* <Image
                src="/kandoo.png"
                alt="Kandoo Logo"
                width={112}
                height={32}
                priority
                /> */}
                <h1 className='text-4xl uppercase font-bold'>Kandoo</h1>
            </Link>
        </div>

        <nav className="hidden lg:block">
          <Link href="#features" className={`font-medium uppercase ${scrolled ? 'text-black' : 'text-black'}`}>
            Kandoo for business
          </Link>
        </nav>
      </div>
    </header>
  );
}