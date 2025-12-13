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

  const [currentLang, setCurrentLang] = useState("en");

useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");

    if (urlLang) {
      setCurrentLang(urlLang);
      return;
    }

    const browserLang = navigator.language.toLowerCase();

    let detectedLang = "en";

    if (browserLang.startsWith("si")) detectedLang = "si";
    else if (browserLang.startsWith("ta")) detectedLang = "ta";
    else detectedLang = "en";

    setCurrentLang(detectedLang);

    if (detectedLang !== "en") {
      window.location.replace(`/?lang=${detectedLang}`);
    }
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
                <Image
                src="/logo.svg"
                alt="Kandoo Logo"
                width={112}
                height={32}
                priority
                />
                {/* <h1 className='text-4xl uppercase font-bold'>Kandoo</h1> */}
            </Link>
        </div>

        <nav className="block">
          <select
            value={currentLang}
            className={`font-medium uppercase bg-transparent outline-none cursor-pointer ${
              scrolled ? 'text-black' : 'text-black'
            }`}
            onChange={(e) => {
              const lang = e.target.value;
              window.location.href = lang === "en" ? "/" : `/?lang=${lang}`;
            }}
          >
            <option value="en">English</option>
            <option value="si">සිංහල</option>
            <option value="ta">தமிழ்</option>
          </select>
        </nav>
      </div>
    </header>
  );
}