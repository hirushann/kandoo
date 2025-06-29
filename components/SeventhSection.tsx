import Image from "next/image";

export default function SeventhSection() {
  return (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center min-h-[900px] flex-row-reverse">
            <div className="pr-[8%]">
                <h2 className="text-4xl font-bold text-[#040a19] leading-tight mb-5 text-balance">
                Talk about Anything<br />
                and Everything
                </h2>
                <p className="text-[#41444d] text-lg leading-normal text-pretty">
                    Improve your English speaking, pronunciation and grammar by chatting with Loora, the most advanced AI English tutor. Talk about anything from sports to tech, business, fashion, or your latest book or show. Loora is up for any topic.
                </p>
            </div>
            <div className="flex items-center justify-between flex-col min-h-full pr-7.5 min-w-1/2 shrink-0 relative">
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