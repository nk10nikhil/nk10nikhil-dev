import { cn } from "@/lib/utils";
import { Marquee } from "../ui/Marquee";

const reviews = [
    {
        name: "Anu",
        username: "@anu",
        body: "He is highly skilled and has a great eye for detail. He is a great team player and would make a great asset to any team.",
        img: "https://avatar.vercel.sh/anu",
    },
    {
        name: "Satyam",
        username: "@satyam",
        body: "He is a dedicated professional with a strong work ethic. He consistently delivers high-quality work.",
        img: "https://avatar.vercel.sh/satyam",
    },
    {
        name: "Ankit",
        username: "@ankit",
        body: "He is a creative thinker and problem solver. He brings innovative ideas to the table.",
        img: "https://avatar.vercel.sh/ankit",
    },
    {
        name: "Soham",
        username: "@soham",
        body: "He is a reliable team member who always meets deadlines. His attention to detail is commendable.",
        img: "https://avatar.vercel.sh/soham",
    },
    {
        name: "Palak",
        username: "@palak",
        body: "He is a quick learner and adapts well to new challenges. He is a valuable asset to any project.",
        img: "https://avatar.vercel.sh/palak",
    },
    {
        name: "Mahek",
        username: "@mahek",
        body: "He has excellent communication skills and works well with others. He is a great collaborator.",
        img: "https://avatar.vercel.sh/mahek",
    },
    {
        name: "Nidhi",
        username: "@nidhi",
        body: "He is a highly motivated individual who consistently exceeds expectations. He is a pleasure to work with.",
        img: "https://avatar.vercel.sh/nidhi",
    },
    {
        name: "Priti",
        username: "@priti",
        body: "He is a detail-oriented professional who always delivers high-quality work. He is a great team player.",
        img: "https://avatar.vercel.sh/priti",
    },
    {
        name: "Rahul",
        username: "@rahul",
        body: "He is a strategic thinker with a knack for solving complex problems. He is a valuable team member.",
        img: "https://avatar.vercel.sh/rahul",
    },
    {
        name: "Kunal",
        username: "@kunal",
        body: "He is a dedicated professional who always goes the extra mile. His work is always top-notch.",
        img: "https://avatar.vercel.sh/kunal",
    },
    {
        name: "Neha",
        username: "@neha",
        body: "He is a creative and innovative thinker. He brings fresh ideas to every project she works on.",
        img: "https://avatar.vercel.sh/neha",
    },
    {
        name: "Vishu",
        username: "@vishu",
        body: "He is a reliable and hardworking individual. He consistently delivers high-quality work on time.",
        img: "https://avatar.vercel.sh/vishu",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
