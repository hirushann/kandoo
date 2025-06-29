import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const colors = [
  "border-orange-300 text-orange-500",
  "border-blue-300 text-blue-500",
  "border-pink-300 text-pink-500",
  "border-purple-300 text-purple-500",
];

const ReviewCard = (
  { name, username, body }: { name: string; username: string; body: string },
  index: number
) => {
  const color = colors[index % colors.length];

  return (
  <div className={cn(
    "w-72 !border-3 p-10 bg-white shadow-md h-[420px] flex flex-col justify-between rounded-[25px]",
    color.includes("border") && `border ${color}`,
  )}>
    <div className={cn("text-3xl mb-4", color)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="31"
        fill="currentColor"
        className={cn(color)}
      >
        <path d="M7.95 14.5q4.55 0 6.85 2.15 2.3 2.1 2.3 5.85 0 3.45-2.4 5.75t-5.95 2.3q-3.45 0-6.05-2.7-2.55-2.7-2.55-8T1.7 10.5q1.6-4.1 4.7-6.7Q9.5 1.15 14.05.15q.45-.1.7 0 .3.1.3.35a.54.54 0 0 1-.15.5q-.15.2-.55.3-4 1-6.35 3.05t-3.4 4.4q-1 2.35-1 4.2 0 .75.4 1.15t1.4.4zm18.85-.05q4.55 0 6.8 2.15 2.3 2.1 2.3 5.8 0 3.45-2.4 5.75-2.35 2.3-5.95 2.3-3.45 0-6-2.65Q19 25.1 19 19.75q0-5.3 1.55-9.35 1.6-4.1 4.7-6.7 3.1-2.65 7.65-3.65.4-.1.65 0 .3.1.35.4 0 .25-.15.45t-.6.35q-4 1-6.35 3.05t-3.35 4.4-1 4.2q0 .7.4 1.15.4.4 1.35.4z"/>
      </svg>
      <p className="text-[22px] text-gray-900 font-medium mb-4 mt-4">{body}</p>
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-600 mb-1">{name}, {username}</p>
      <p className="text-yellow-500 text-sm">★★★★★</p>
    </div>
  </div>
);
};
 
export function ReviewSection() {
  return (
    <div className="pt-48 review-section-container-bg">
      <div className="mx-auto px-8 relative max-w-[1210px] flex justify-center items-center gap-5">
        <h2 className="text-6xl leading-normal text-center text-balance font-bold">Loora is great for</h2>
        <TypingAnimation className="text-[#2a60f9] text-6xl leading-normal text-center text-balance">Business</TypingAnimation>
      </div>
      <div className="pt-32 pb-20">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <div key={review.username} className="px-4">
              {ReviewCard(review, index)}
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto px-8 relative max-w-[1210px] flex flex-col justify-center items-center gap-5">
        <div className="w-full">
          <p className="font-normal text-[#41444d] text-center">Real reviews from the App Store ☝️</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="178" height="20" fill="none" className="mt-28"><path fill="#9DA0A6" d="M0 9h53v2H0zM125 9h53v2h-53z"></path><rect width="8" height="20" x="85" fill="#9DA0A6" rx="4"></rect><rect width="8" height="14" x="73" y="3" fill="#9DA0A6" rx="4"></rect><rect width="8" height="10" x="97" y="5" fill="#9DA0A6" rx="4"></rect></svg>
      </div>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}