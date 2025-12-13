'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export default function RealLifeSection() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const t = { en, si, ta }[lang] ?? en;
  return (
    <section className="py-32 bg-white relative pb-0 lg:pb-32">
      <div className="max-w-7xl mx-auto px-7.5">
        <div className="lg:max-w-[66%] mx-auto text-center relative z-50">
          <h2 className="text-[30px] lg:text-[54px] leading-tight text-balance mb-5 mx-auto break-words font-bold" dangerouslySetInnerHTML={{ __html: t.third_section_title }} />

          <p className="text-base lg:text-lg text-[#41444d] font-normal leading-normal mx-auto mb-10 lg:px-20" dangerouslySetInnerHTML={{ __html: t.third_section_subtext }} />

          <p className="text-base lg:text-[26px] leading-normal text-pretty text-[#040a19] break-words" dangerouslySetInnerHTML={{ __html: t.third_section_subtext_2 }} />
        </div>
        <div className="aboutAi_spaceBall1__Lten1"></div>
        <div className="aboutAi_spaceBall2__XpBSo"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="178" height="20" fill="none" className="my-36 mx-auto z-[99999999]"><path fill="#9DA0A6" d="M0 9h53v2H0zM125 9h53v2h-53z"></path><rect width="8" height="20" x="85" fill="#9DA0A6" rx="4"></rect><rect width="8" height="14" x="73" y="3" fill="#9DA0A6" rx="4"></rect><rect width="8" height="10" x="97" y="5" fill="#9DA0A6" rx="4"></rect></svg>
    </section>
  );
}