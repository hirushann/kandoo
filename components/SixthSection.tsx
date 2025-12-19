'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export default function SixthSection() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const t = { en, si, ta }[lang] ?? en;
  return (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
            <div className="pr-[8%]">
                <h2 className="text-4xl font-bold text-[#040a19] leading-tight mb-5 text-balance text-center lg:text-left" dangerouslySetInnerHTML={{ __html: t.sixth_section_title }} />
                <p className="text-[#41444d] text-lg leading-normal text-pretty text-center lg:text-left" dangerouslySetInnerHTML={{ __html: t.sixth_section_subtext }} />
            </div>
            <div className="flex lg:max-w-1/2 shrink-0 relative min-w-1/2 pt-8 lg:pt-0">
                <div className="features_gradient3__06lnB"></div>

                <div className="absolute z-20 right-0 bottom-0">
                    <Image src="/girlwithphone.png" alt="Impressive Work" width={410} height={391} className="w-[310px] h-[390px] object-contain lg:w-[410px] lg:h-[390px]" />
                </div>

                <div className="relative p-0 m-0 w-full">
                    <Image src="/chat UI.png" alt="Impressive Work" width={393} height={778} className="w-full h-[700px] object-cover lg:w-[393px] lg:h-[778px] relative z-10 m-0 p-0" />
                    {/* <div className="absolute z-0 left-1/2 bottom-0 opacity-5 -translate-x-2/4 translate-y-[-60%]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 467 467" width="467" height="467" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="467" height="467" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,233.5,233.5)" opacity="1" style="display: block;"><g opacity="0" transform="matrix(0.9999999403953552,0,0,0.9999999403953552,0,0)"><path fill="rgb(235,87,87)" fill-opacity="1" d=" M0,-233.5 C128.86865234375,-233.5 233.5,-128.86865234375 233.5,0 C233.5,128.86865234375 128.86865234375,233.5 0,233.5 C-128.86865234375,233.5 -233.5,128.86865234375 -233.5,0 C-233.5,-128.86865234375 -128.86865234375,-233.5 0,-233.5z"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,233.5,233.5)" opacity="1"><g opacity="0.13347515941906238" transform="matrix(0.9629955887794495,0,0,0.9629955887794495,0,0)"><path fill="rgb(235,87,87)" fill-opacity="1" d=" M0,-233.5 C128.86865234375,-233.5 233.5,-128.86865234375 233.5,0 C233.5,128.86865234375 128.86865234375,233.5 0,233.5 C-128.86865234375,233.5 -233.5,128.86865234375 -233.5,0 C-233.5,-128.86865234375 -128.86865234375,-233.5 0,-233.5z"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,233.5,233.5)" opacity="1"><g opacity="0.30014181295942416" transform="matrix(0.8440304398536682,0,0,0.8440304398536682,0,0)"><path fill="rgb(235,87,87)" fill-opacity="1" d=" M0,-233.5 C128.86865234375,-233.5 233.5,-128.86865234375 233.5,0 C233.5,128.86865234375 128.86865234375,233.5 0,233.5 C-128.86865234375,233.5 -233.5,128.86865234375 -233.5,0 C-233.5,-128.86865234375 -128.86865234375,-233.5 0,-233.5z"></path></g></g></g></svg>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  );
}