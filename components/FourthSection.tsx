import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
        {/* Left text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Practice Real-Life English Conversations <br />
            in Real-Life Situations
          </h2>
          <p className="text-gray-600 text-lg">
            Immerse in conversations that span every situation—be it business meetings, job interviews, or friendly chats—and witness your fluency thrive where it truly matters: for you.
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
              src="/exp_vdo_01.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto border-4 border-white rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}