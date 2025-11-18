import { Avatar, AvatarFallback, AvatarImage } from "@/components/items/avatar";
import { Card, CardContent } from "@/components/items/cards";
import { Marquee } from "@/components/items/3d-testimonials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, Star } from "lucide-react";

export type Testimonial = {
  name: string;
  username: string;
  body: string;
  img: string;
};

const indianTestimonials: Testimonial[] = [
  {
    name: "Maya Patel",
    username: "@maya",
    body: "Setup was a breeze!",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Aarav Sharma",
    username: "@aarav",
    body: "Amazing experience with the product!",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Priya Singh",
    username: "@priya",
    body: "Customer support is excellent.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    username: "@rahul",
    body: "Highly recommend to everyone.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Sneha Joshi",
    username: "@sneha",
    body: "Very smooth and easy to use.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vikram Desai",
    username: "@vikram",
    body: "The interface is very user-friendly.",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Anjali Mehta",
    username: "@anjali",
    body: "Loved the quick response from support.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rohan Gupta",
    username: "@rohan",
    body: "The features exceeded my expectations.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Kavita Nair",
    username: "@kavita",
    body: "Easy to integrate with my workflow.",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Suresh Kumar",
    username: "@suresh",
    body: "Performance is top-notch.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Neha Agarwal",
    username: "@neha",
    body: "Very reliable and efficient.",
    img: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    name: "Manish Choudhary",
    username: "@manish",
    body: "Setup was quick and simple.",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Pooja Reddy",
    username: "@pooja",
    body: "The design is elegant and modern.",
    img: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Amit Sinha",
    username: "@amit",
    body: "I recommend this to all my friends.",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Divya Bhatt",
    username: "@divya",
    body: "Great value for money.",
    img: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    name: "Rajesh Pillai",
    username: "@rajesh",
    body: "Support team is very helpful.",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    name: "Shweta Kapoor",
    username: "@shweta",
    body: "I am very satisfied with the service.",
    img: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Nikhil Jain",
    username: "@nikhil",
    body: "Works perfectly for my needs.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Ritu Malhotra",
    username: "@ritu",
    body: "The updates are frequent and useful.",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "Sanjay Rao",
    username: "@sanjay",
    body: "Very intuitive and easy to use.",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Meera Iyer",
    username: "@meera",
    body: "The tutorials are very helpful.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Deepak Joshi",
    username: "@deepak",
    body: "Setup was seamless.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Asha Menon",
    username: "@asha",
    body: "I love the clean design.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Harshad Patil",
    username: "@harshad",
    body: "Very responsive and fast.",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Sunita Das",
    username: "@sunita",
    body: "Easy to navigate and use.",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "Karan Singh",
    username: "@karan",
    body: "The best product I have used.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Rashmi Ghosh",
    username: "@rashmi",
    body: "Very happy with the results.",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Abhishek Chauhan",
    username: "@abhishek",
    body: "Setup instructions were clear.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Preeti Sharma",
    username: "@preeti",
    body: "The team is very professional.",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    name: "Vivek Anand",
    username: "@vivek",
    body: "I will definitely use it again.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Tanya Bhatia",
    username: "@tanya",
    body: "Exceeded my expectations!",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

function TestimonialCard({ img, name, username, body }: Testimonial) {
  return (
    <Card className="w-60">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1 pt-4">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-econdary-foreground">
          {body}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialMarquee({
  testimonials = indianTestimonials,
  repeat = 4,
  duration = "40s",
}: {
  testimonials?: Testimonial[];
  repeat?: number;
  duration?: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden bg-transparent"
      ref={ref}
    >
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300 font-medium">
              Client Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-amber-200 to-white">
              What Clients Say
            </span>
          </h2>

          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>

          {/* Rating stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-1 mt-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-white/60 text-sm">
              5.0 from 100+ reviews
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonial Carousel - Exact Same */}
      <div className="border-0 border-border rounded-lg relative flex h-96 w-screen flex-row items-center justify-center overflow-hidden gap-1.5 perspective-normal">
        <div
          className="flex flex-row items-center gap-2"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            className={`[--duration:${duration}]`}
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* Gradient overlays for vertical marquee */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

// import React, { useMemo } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "../items/avatar";
// import { Card, CardContent } from "../items/cards";
// import { Marquee } from "../items/3d-testimonials";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { MessageSquare, Star } from "lucide-react";

// export type Testimonial = {
//   name: string;
//   username: string;
//   body: string;
//   img: string;
// };

// // Optimized testimonial data with fewer items for better performance
// const indianTestimonials: Testimonial[] = [
//   {
//     name: "Maya Patel",
//     username: "@maya",
//     body: "Setup was a breeze!",
//     img: "https://randomuser.me/api/portraits/women/53.jpg",
//   },
//   {
//     name: "Aarav Sharma",
//     username: "@aarav",
//     body: "Amazing experience with the product!",
//     img: "https://randomuser.me/api/portraits/men/34.jpg",
//   },
//   {
//     name: "Priya Singh",
//     username: "@priya",
//     body: "Customer support is excellent.",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Rahul Verma",
//     username: "@rahul",
//     body: "Highly recommend to everyone.",
//     img: "https://randomuser.me/api/portraits/men/54.jpg",
//   },
//   {
//     name: "Sneha Joshi",
//     username: "@sneha",
//     body: "Very smooth and easy to use.",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Vikram Desai",
//     username: "@vikram",
//     body: "The interface is very user-friendly.",
//     img: "https://randomuser.me/api/portraits/men/15.jpg",
//   },
//   {
//     name: "Anjali Mehta",
//     username: "@anjali",
//     body: "Loved the quick response from support.",
//     img: "https://randomuser.me/api/portraits/women/21.jpg",
//   },
//   {
//     name: "Rohan Gupta",
//     username: "@rohan",
//     body: "The features exceeded my expectations.",
//     img: "https://randomuser.me/api/portraits/men/22.jpg",
//   },
//   {
//     name: "Kavita Nair",
//     username: "@kavita",
//     body: "Easy to integrate with my workflow.",
//     img: "https://randomuser.me/api/portraits/women/32.jpg",
//   },
//   {
//     name: "Suresh Kumar",
//     username: "@suresh",
//     body: "Performance is top-notch.",
//     img: "https://randomuser.me/api/portraits/men/33.jpg",
//   },
// ];

// // Memoized testimonial card to prevent unnecessary re-renders
// const TestimonialCard = React.memo(
//   ({ img, name, username, body }: Testimonial) => {
//     return (
//       <Card className="w-56 h-32">
//         {" "}
//         {/* Reduced size for better performance */}
//         <CardContent className="p-3">
//           {" "}
//           {/* Reduced padding */}
//           <div className="flex items-center gap-2">
//             <Avatar className="size-7">
//               {" "}
//               {/* Smaller avatar */}
//               <AvatarImage src={img} alt={username} loading="lazy" />
//               <AvatarFallback className="text-xs">{name[0]}</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <figcaption className="text-xs font-medium text-foreground flex items-center gap-1">
//                 {name}
//               </figcaption>
//               <p className="text-xs text-muted-foreground">{username}</p>
//             </div>
//           </div>
//           <blockquote className="mt-2 text-xs text-secondary-foreground line-clamp-2">
//             {body}
//           </blockquote>
//         </CardContent>
//       </Card>
//     );
//   }
// );

// TestimonialCard.displayName = "TestimonialCard";

// export default function TestimonialMarquee({
//   testimonials = indianTestimonials,
//   repeat = 3, // Reduced repeat count
//   duration = "30s", // Faster animation
// }: {
//   testimonials?: Testimonial[];
//   repeat?: number;
//   duration?: string;
// }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.05, // Lower threshold for earlier trigger
//   });

//   // Memoized marquee columns to prevent unnecessary re-renders
//   const marqueeColumns = useMemo(() => {
//     const columns = [];
//     const columnCount = 6; // Reduced from original for better performance

//     for (let i = 0; i < columnCount; i++) {
//       columns.push(
//         <Marquee
//           key={i}
//           vertical
//           pauseOnHover
//           reverse={i % 2 === 1}
//           repeat={repeat}
//           className={`[--duration:${duration}]`}
//         >
//           {testimonials.map((review) => (
//             <TestimonialCard key={`${review.username}-${i}`} {...review} />
//           ))}
//         </Marquee>
//       );
//     }

//     return columns;
//   }, [testimonials, repeat, duration]);

//   return (
//     <section
//       className="py-8 md:py-12 relative overflow-hidden bg-transparent"
//       ref={ref}
//     >
//       {/* Header Section */}
//       <div className="container mx-auto px-4 mb-8 md:mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.4, delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4"
//           >
//             <MessageSquare className="w-3 h-3 text-amber-400" />
//             <span className="text-xs text-amber-300 font-medium">
//               Client Testimonials
//             </span>
//           </motion.div>

//           <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
//             <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-amber-200 to-white">
//               What Clients Say
//             </span>
//           </h2>

//           <p className="text-white/60 text-sm md:text-base leading-relaxed">
//             Don't just take my word for it. Here's what clients have to say
//             about working with me.
//           </p>

//           {/* Rating stars */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="flex items-center justify-center gap-1 mt-4"
//           >
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
//             ))}
//             <span className="ml-2 text-white/60 text-xs">
//               5.0 from 50+ reviews
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Optimized Testimonial Carousel */}
//       <div className="border-0 border-border rounded-lg relative flex h-80 w-screen flex-row items-center justify-center overflow-hidden gap-1 perspective-normal">
//         <div
//           className="flex flex-row items-center gap-1.5"
//           style={{
//             transform:
//               "translateX(-80px) translateY(0px) translateZ(-80px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
//           }}
//         >
//           {marqueeColumns}

//           {/* Optimized gradient overlays */}
//           <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-background to-transparent"></div>
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent"></div>
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent"></div>
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
