'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export default function FifthSection() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const t = { en, si, ta }[lang] ?? en;
  return (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center pt-16 lg:pt-52">
        
            {/* Left side with video and floating cards */}
            <div className="flex items-center justify-center lg:max-w-1/2 shrink-0 relative min-w-1/2">
                <div className="features_gradient3__06lnB"></div>

                <div className="absolute shrink-0 translate-x-[200px] translate-y-[-310px] rotate-12 hidden lg:block">
                    <Image src="/exp_img_02a.webp" alt="Impressive Work" width={250} height={253} className="w-[250px] h-[253px]" />
                </div>
                
                <div className="absolute shrink-0 translate-x-[-165px] translate-y-[290px] rotate-[-9deg] hidden lg:block">
                    <Image src="/accuracy.png" alt="Conversation topics" width={275} height={215} className="w-[310px] h-[250]"/>
                </div>

                {/* <Image src="/exp_02_device.webp" alt="Practice pronunciation" width={320} height={500} className="w-[320px] h-[618px] border-[3px] border-white rounded-[30px] overflow-hidden shrink-0 z-10"/> */}
                <video className="relative z-10 mx-auto rounded-[28px] object-cover bg-white p-2 lg:w-[350px]" autoPlay muted loop playsInline>
                    <source src="/video landing.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Right text content */}
            <div className="pr-[8%] pt-8 lg:pt-0">
                <h2 className="text-4xl font-bold text-[#040a19] leading-tight mb-5 text-balance" dangerouslySetInnerHTML={{ __html: t.fifth_section_title }} />
                <p className="text-[#41444d] text-lg leading-normal text-pretty" dangerouslySetInnerHTML={{ __html: t.fifth_section_subtext }} />
            </div>
        </div>
    </section>
  );
}