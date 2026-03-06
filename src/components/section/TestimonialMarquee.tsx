import type { CSSProperties } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/elements/avatar";
import { Card, CardContent } from "@/components/elements/cards";
import { Marquee } from "@/components/elements/3d-testimonials";
import { motion, useReducedMotion } from "framer-motion";
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

function splitIntoColumns(
  items: Testimonial[],
  count: number,
): Testimonial[][] {
  const cols = Array.from({ length: count }, () => [] as Testimonial[]);
  items.forEach((item, idx) => cols[idx % count].push(item));
  return cols;
}

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
            <figcaption className="pt-4 text-sm font-medium text-foreground">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">
          {body}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialMarquee({
  testimonials = indianTestimonials,
  repeat = 3,
  duration = "28s",
}: {
  testimonials?: Testimonial[];
  repeat?: number;
  duration?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const columns = splitIntoColumns(testimonials, 4);

  const style1 = { ["--duration" as string]: duration } as CSSProperties;
  const style2 = { ["--duration" as string]: "22s" } as CSSProperties;
  const style3 = { ["--duration" as string]: "26s" } as CSSProperties;
  const style4 = { ["--duration" as string]: "24s" } as CSSProperties;

  return (
    <section
      className="relative overflow-hidden bg-transparent py-12 md:py-16"
      ref={ref}
    >
      <div className="container mx-auto mb-12 px-4 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
            <MessageSquare className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">
              Client Testimonials
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>

          <p className="text-base leading-relaxed text-white/60 md:text-lg">
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>

          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm text-white/60">
              5.0 from 100+ reviews
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mx-auto flex h-[26rem] w-full max-w-full items-center justify-center overflow-hidden [perspective:420px]"
      >
        <div
          className="flex items-center gap-2"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : "translateX(-40px) translateZ(-70px) rotateX(14deg) rotateY(-8deg) rotateZ(8deg)",
          }}
        >
          <Marquee
            vertical
            pauseOnHover
            repeat={repeat}
            style={style1}
            className="[--gap:0.75rem]"
          >
            {columns[0].map((review) => (
              <TestimonialCard key={`c1-${review.username}`} {...review} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={repeat}
            style={style2}
            className="[--gap:0.75rem]"
          >
            {columns[1].map((review) => (
              <TestimonialCard key={`c2-${review.username}`} {...review} />
            ))}
          </Marquee>

          <div className="hidden md:block">
            <Marquee
              vertical
              pauseOnHover
              repeat={repeat}
              style={style3}
              className="[--gap:0.75rem]"
            >
              {columns[2].map((review) => (
                <TestimonialCard key={`c3-${review.username}`} {...review} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee
              vertical
              pauseOnHover
              reverse
              repeat={repeat}
              style={style4}
              className="[--gap:0.75rem]"
            >
              {columns[3].map((review) => (
                <TestimonialCard key={`c4-${review.username}`} {...review} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-transparent" />
      </motion.div>
    </section>
  );
}
