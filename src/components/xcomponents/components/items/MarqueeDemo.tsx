import { cn } from "@/lib/utils";
import { Marquee } from "@/components/items/Marquee";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anu",
    username: "@anu",
    body: "Highly skilled with a great eye for detail. A fantastic team player who would be a great asset to any project.",
    img: "https://avatar.vercel.sh/anu",
    rating: 5,
  },
  {
    name: "Satyam",
    username: "@satyam",
    body: "Dedicated professional with strong work ethic. Consistently delivers high-quality work.",
    img: "https://avatar.vercel.sh/satyam",
    rating: 5,
  },
  {
    name: "Ankit",
    username: "@ankit",
    body: "Creative thinker and excellent problem solver. Brings innovative ideas to every challenge.",
    img: "https://avatar.vercel.sh/ankit",
    rating: 5,
  },
  {
    name: "Soham",
    username: "@soham",
    body: "Reliable team member who always meets deadlines. Attention to detail is commendable.",
    img: "https://avatar.vercel.sh/soham",
    rating: 5,
  },
  {
    name: "Palak",
    username: "@palak",
    body: "Quick learner who adapts well to new challenges. A valuable asset to any team.",
    img: "https://avatar.vercel.sh/palak",
    rating: 5,
  },
  {
    name: "Mahek",
    username: "@mahek",
    body: "Excellent communication skills and works seamlessly with others. Great collaborator.",
    img: "https://avatar.vercel.sh/mahek",
    rating: 5,
  },
  {
    name: "Nidhi",
    username: "@nidhi",
    body: "Highly motivated individual who consistently exceeds expectations. Pleasure to work with.",
    img: "https://avatar.vercel.sh/nidhi",
    rating: 5,
  },
  {
    name: "Priti",
    username: "@priti",
    body: "Detail-oriented professional who always delivers quality. Great team player.",
    img: "https://avatar.vercel.sh/priti",
    rating: 5,
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "Strategic thinker with knack for solving complex problems. Invaluable team member.",
    img: "https://avatar.vercel.sh/rahul",
    rating: 5,
  },
  {
    name: "Kunal",
    username: "@kunal",
    body: "Dedicated professional who always goes the extra mile. Work is consistently top-notch.",
    img: "https://avatar.vercel.sh/kunal",
    rating: 5,
  },
  {
    name: "Neha",
    username: "@neha",
    body: "Creative and innovative thinker. Brings fresh perspectives to every project.",
    img: "https://avatar.vercel.sh/neha",
    rating: 5,
  },
  {
    name: "Vishu",
    username: "@vishu",
    body: "Reliable and hardworking individual. Consistently delivers high-quality work on time.",
    img: "https://avatar.vercel.sh/vishu",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
        "transition-all duration-300 hover:shadow-lg group"
      )}
    >
      {/* Quote Icon - Top Right */}
      <div className="absolute top-3 right-3 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
        <Quote className="h-6 w-6" />
      </div>

      <div className="flex flex-col gap-2 relative">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            className="rounded-full ring-2 ring-border group-hover:ring-primary/30 transition-all duration-300"
            width="40"
            height="40"
            alt={name}
            src={img}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <figcaption className="text-sm font-semibold truncate group-hover:text-primary transition-colors duration-300">
                {name}
              </figcaption>
              {/* Rating Stars - Next to Name */}
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground truncate">{username}</p>
          </div>
        </div>

        {/* Review Body */}
        <blockquote className="text-sm text-muted-foreground leading-relaxed">
          {body}
        </blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}

// import { cn } from "@/lib/utils";
// import { Marquee } from "../items/Marquee";
// import { Star, Quote } from "lucide-react";
// import { useMemo, memo } from "react";

// // Memoized review data to prevent unnecessary re-renders
// const reviews = [
//   {
//     name: "Anu",
//     username: "@anu",
//     body: "Highly skilled with a great eye for detail. A fantastic team player who would be a great asset to any project.",
//     img: "https://avatar.vercel.sh/anu",
//     rating: 5,
//   },
//   {
//     name: "Satyam",
//     username: "@satyam",
//     body: "Dedicated professional with strong work ethic. Consistently delivers high-quality work.",
//     img: "https://avatar.vercel.sh/satyam",
//     rating: 5,
//   },
//   {
//     name: "Ankit",
//     username: "@ankit",
//     body: "Creative thinker and excellent problem solver. Brings innovative ideas to every challenge.",
//     img: "https://avatar.vercel.sh/ankit",
//     rating: 5,
//   },
//   {
//     name: "Soham",
//     username: "@soham",
//     body: "Reliable team member who always meets deadlines. Attention to detail is commendable.",
//     img: "https://avatar.vercel.sh/soham",
//     rating: 5,
//   },
//   {
//     name: "Palak",
//     username: "@palak",
//     body: "Quick learner who adapts well to new challenges. A valuable asset to any team.",
//     img: "https://avatar.vercel.sh/palak",
//     rating: 5,
//   },
//   {
//     name: "Mahek",
//     username: "@mahek",
//     body: "Excellent communication skills and works seamlessly with others. Great collaborator.",
//     img: "https://avatar.vercel.sh/mahek",
//     rating: 5,
//   },
//   {
//     name: "Nidhi",
//     username: "@nidhi",
//     body: "Highly motivated individual who consistently exceeds expectations. Pleasure to work with.",
//     img: "https://avatar.vercel.sh/nidhi",
//     rating: 5,
//   },
//   {
//     name: "Priti",
//     username: "@priti",
//     body: "Detail-oriented professional who always delivers quality. Great team player.",
//     img: "https://avatar.vercel.sh/priti",
//     rating: 5,
//   },
//   {
//     name: "Rahul",
//     username: "@rahul",
//     body: "Strategic thinker with knack for solving complex problems. Invaluable team member.",
//     img: "https://avatar.vercel.sh/rahul",
//     rating: 5,
//   },
//   {
//     name: "Kunal",
//     username: "@kunal",
//     body: "Dedicated professional who always goes the extra mile. Work is consistently top-notch.",
//     img: "https://avatar.vercel.sh/kunal",
//     rating: 5,
//   },
//   {
//     name: "Neha",
//     username: "@neha",
//     body: "Creative and innovative thinker. Brings fresh perspectives to every project.",
//     img: "https://avatar.vercel.sh/neha",
//     rating: 5,
//   },
//   {
//     name: "Vishu",
//     username: "@vishu",
//     body: "Reliable and hardworking individual. Consistently delivers high-quality work on time.",
//     img: "https://avatar.vercel.sh/vishu",
//     rating: 5,
//   },
// ];

// // Preload critical images
// const preloadImages = () => {
//   reviews.forEach((review) => {
//     const img = new Image();
//     img.src = review.img;
//   });
// };

// // Execute preload on module load
// if (typeof window !== "undefined") {
//   setTimeout(preloadImages, 1000);
// }

// // Memoized ReviewCard component to prevent unnecessary re-renders
// const ReviewCard = memo(
//   ({
//     img,
//     name,
//     username,
//     body,
//     rating,
//   }: {
//     img: string;
//     name: string;
//     username: string;
//     body: string;
//     rating: number;
//   }) => {
//     // Pre-render stars array to avoid recreating on every render
//     const stars = useMemo(
//       () =>
//         Array.from({ length: rating }, (_, i) => (
//           <Star
//             key={i}
//             className="h-3 w-3 fill-yellow-500 text-yellow-500 flex-shrink-0"
//             style={{ willChange: "transform" }}
//           />
//         )),
//       [rating]
//     );

//     return (
//       <figure
//         className={cn(
//           "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
//           "border-gray-50/[.1] bg-background/50 backdrop-blur-sm",
//           "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//           "transition-all duration-300 hover:shadow-xl group",
//           "hover:scale-105 hover:-translate-y-1",
//           "transform-gpu" // Force GPU acceleration
//         )}
//         style={{ willChange: "transform, opacity" }}
//       >
//         {/* Enhanced Background Glow Effect */}
//         <div
//           className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
//           style={{ willChange: "opacity" }}
//         />

//         {/* Quote Icon - Enhanced */}
//         <div className="absolute top-3 right-3 text-primary/20 group-hover:text-primary/60 transition-all duration-500 group-hover:scale-110">
//           <Quote className="h-6 w-6" style={{ willChange: "transform" }} />
//         </div>

//         <div className="flex flex-col gap-2 relative z-10">
//           {/* Header - Optimized Layout */}
//           <div className="flex items-start gap-3">
//             <img
//               className="rounded-full ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300 flex-shrink-0"
//               width="40"
//               height="40"
//               alt={name}
//               src={img}
//               loading="lazy"
//               decoding="async"
//               style={{
//                 willChange: "transform, border-color",
//                 contentVisibility: "auto",
//               }}
//             />
//             <div className="flex-1 min-w-0 space-y-1">
//               <div className="flex items-start justify-between gap-2">
//                 <div className="min-w-0">
//                   <figcaption className="text-sm font-semibold truncate group-hover:text-primary transition-colors duration-300">
//                     {name}
//                   </figcaption>
//                   <p className="text-xs text-muted-foreground truncate mt-0.5">
//                     {username}
//                   </p>
//                 </div>

//                 {/* Rating Stars - Optimized */}
//                 <div className="flex gap-0.5 flex-shrink-0 mt-0.5">{stars}</div>
//               </div>
//             </div>
//           </div>

//           {/* Review Body - Enhanced Typography */}
//           <blockquote className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
//             {body}
//           </blockquote>
//         </div>
//       </figure>
//     );
//   }
// );

// ReviewCard.displayName = "ReviewCard";

// export function MarqueeDemo() {
//   // Memoize row splitting to prevent recalculation on re-renders
//   const { firstRow, secondRow } = useMemo(() => {
//     const mid = Math.ceil(reviews.length / 2);
//     return {
//       firstRow: reviews.slice(0, mid),
//       secondRow: reviews.slice(mid),
//     };
//   }, []);

//   return (
//     <div
//       className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 py-4"
//       style={{ contentVisibility: "auto" }}
//     >
//       {/* First Marquee Row */}
//       <div className="w-full">
//         <Marquee
//           pauseOnHover
//           className="[--duration:35s]"
//           style={{ willChange: "transform" }}
//         >
//           {firstRow.map((review, index) => (
//             <div
//               key={review.username}
//               className="mx-2"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//                 willChange: "transform",
//               }}
//             >
//               <ReviewCard {...review} />
//             </div>
//           ))}
//         </Marquee>
//       </div>

//       {/* Second Marquee Row */}
//       <div className="w-full">
//         <Marquee
//           reverse
//           pauseOnHover
//           className="[--duration:30s]"
//           style={{ willChange: "transform" }}
//         >
//           {secondRow.map((review, index) => (
//             <div
//               key={review.username}
//               className="mx-2"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//                 willChange: "transform",
//               }}
//             >
//               <ReviewCard {...review} />
//             </div>
//           ))}
//         </Marquee>
//       </div>

//       {/* Enhanced Fade Gradients */}
//       <div
//         className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent z-20"
//         style={{ willChange: "opacity" }}
//       />
//       <div
//         className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent z-20"
//         style={{ willChange: "opacity" }}
//       />

//       {/* Subtle Edge Glow Effects */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary/5 to-transparent z-10" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-secondary/5 to-transparent z-10" />
//     </div>
//   );
// }
