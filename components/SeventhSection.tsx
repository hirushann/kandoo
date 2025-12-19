'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export default function SeventhSection() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const t = { en, si, ta }[lang] ?? en;
  return (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center min-h-[900px] lg:flex-row-reverse">
            <div className="pr-[8%]">
                <h2 className="text-4xl font-bold text-[#040a19] leading-tight mb-5 text-balance text-center lg:text-left" dangerouslySetInnerHTML={{ __html: t.seventh_section_title }} />
                <p className="text-[#41444d] text-lg leading-normal text-pretty text-center lg:text-left" dangerouslySetInnerHTML={{ __html: t.seventh_section_subtext }} />
            </div>
            <div className="flex items-center justify-between flex-col min-h-full pr-7.5 min-w-1/2 shrink-0 relative pt-8 lg:pt-0">
                <div className="flex items-center flex-row-reverse">
                    <div className="w-3/4 relative z-10">
                        <Image src="/exp_img_04f.webp" alt="" width={388} height={239} className="translate-x-[50px] p-0 m-0" />
                    </div>
                    <div className="translate-y-[50px] w-1/4 relative z-10">
                        <Image src="/exp_img_04e.webp" alt="" width={80} height={80} className="translate-x-[50px] p-0 m-0" />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-3/4 relative z-10">
                        <Image src="/exp_img_04d.webp" alt="" width={396} height={226} className="-translate-x-[15px] p-0 m-0" />
                    </div>
                    <div className="w-1/4 relative z-10">
                        <Image src="/exp_img_04c.webp" alt="" width={80} height={80} className="" />
                    </div>
                </div>

                <div className="flex items-center flex-row-reverse">
                    <div className="w-3/4 relative z-10">
                        <Image src="/exp_img_04b.webp" alt="" width={396} height={223} className="translate-x-[40px] p-0 m-0" />
                    </div>
                    <div className="w-1/4 relative translate-y-[10px]">
                        <Image src="/exp_img_04a.webp" alt="" width={80} height={80} className="translate-x-[110px]" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}