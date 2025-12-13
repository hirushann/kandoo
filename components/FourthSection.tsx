'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export default function FourthSection() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const t = { en, si, ta }[lang] ?? en;
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
        {/* Left text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t.fourth_section_title }} />
          <p className="text-gray-600 text-lg" dangerouslySetInnerHTML={{ __html: t.fourth_section_subtext }} />
        </div>

        {/* Right side with video and floating cards */}
        <div className="relative w-full h-full">
        <div className="features_gradient_custom"></div>
          <Image
            src="/speaking-bubbles.png"
            alt="Conversation topics"
            width={280}
            height={565}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 hidden lg:block w-[220px] h-[465px] object-contain"
          />

          <div className="overflow-hidden shadow-lg w-full max-w-md ml-auto relative z-10">
            <video
              src="/speaking_demos.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[400px] object-cover border-4 border-white rounded-3xl bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}