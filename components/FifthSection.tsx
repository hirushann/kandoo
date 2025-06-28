import Image from "next/image";

export default function FifthSection() {
  return (
    <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center min-h-[900px]">
        
            {/* Left side with video and floating cards */}
            <div className="flex items-center justify-center max-w-1/2 shrink-0 relative min-w-1/2">
                <div className="features_gradient3__06lnB"></div>

                <div className="absolute shrink-0 translate-x-[200px] translate-y-[-310px] rotate-12">
                    <Image src="/exp_img_02a.webp" alt="Impressive Work" width={250} height={253} className="w-[250px] h-[253px]" />
                </div>
                
                <div className="absolute shrink-0 translate-x-[-165px] translate-y-[290px] rotate-[-9deg]">
                    <Image src="/exp_img_02b.webp" alt="Conversation topics" width={275} height={215} className="w-[275px] h-[215]"/>
                </div>

                <Image src="/exp_02_device.webp" alt="Practice pronunciation" width={320} height={500} className="w-[320px] h-[618px] border-[3px] border-white rounded-[30px] overflow-hidden shrink-0 z-10"/>
            </div>

            {/* Right text content */}
            <div className="pr-[8%]">
                <h2 className="text-4xl font-bold text-[#040a19] leading-tight mb-5 text-balance">
                Instant English<br />
                Evaluation & Feedback
                </h2>
                <p className="text-[#41444d] text-lg leading-normal text-pretty">
                Maximize your potential with real-time feedback from your AI tutor. Perfect pronounciation, fix grammar, embrace rephrasing, and enhance your accent. Thrive on continuous improvement.
                </p>
            </div>
        </div>
    </section>
  );
}