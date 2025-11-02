import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
        {/* Left text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Practice Real English for Real Life — with <br />
            our speaking buddies
          </h2>
          <p className="text-gray-600 text-lg">
            From job interviews to business meetings — even that tricky family dinner toast — Kandoo helps you practise every situation before it happens, so you’ll always speak with confidence, not hesitation.
          </p>
        </div>

        {/* Right side with video and floating cards */}
        <div className="relative w-full h-full">
        <div className="features_gradient_custom"></div>
          <Image
            src="/exp_img_01.webp"
            alt="Conversation topics"
            width={280}
            height={565}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 hidden lg:block"
          />

          <div className="overflow-hidden shadow-lg w-full max-w-md mx-auto relative z-10">
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