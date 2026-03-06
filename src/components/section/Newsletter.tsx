import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from "react";
import { Send, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/useInView";
import { useRuntimeProfile } from "@/hooks/useRuntimeProfile";

type GlobePoint = {
  lat: number;
  lng: number;
};

function NewsletterGlobe({
  active,
  reducedMotion,
  preferredFps,
}: {
  active: boolean;
  reducedMotion: boolean;
  preferredFps: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const points = useMemo<GlobePoint[]>(
    () => [
      { lat: 40.71, lng: -74.0 },
      { lat: 51.5, lng: -0.12 },
      { lat: 35.67, lng: 139.65 },
      { lat: 19.07, lng: 72.87 },
      { lat: -33.86, lng: 151.2 },
      { lat: 25.2, lng: 55.27 },
    ],
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let last = 0;
    let angle = 0;
    let visible = document.visibilityState === "visible";

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const size = Math.min(parent.clientWidth, parent.clientHeight, 320);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const to3D = (lat: number, lng: number, r: number) => {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lng + 180) * Math.PI) / 180;
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
      };
    };

    const rotateY = (p: { x: number; y: number; z: number }, a: number) => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c };
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const r = w * 0.38;

      ctx.clearRect(0, 0, w, h);

      const fill = ctx.createRadialGradient(cx, cy, r * 0.45, cx, cy, r);
      fill.addColorStop(0, "hsla(32,95%,55%,0.10)");
      fill.addColorStop(1, "hsla(32,95%,45%,0.25)");
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "hsla(32,95%,48%,0.85)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "hsla(32,95%,48%,0.22)";
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        const y = cy - (lat / 90) * r;
        const rr = Math.sqrt(r * r - ((lat / 90) * r) ** 2);
        ctx.beginPath();
        ctx.ellipse(cx, y, rr, rr * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let lng = 0; lng < 360; lng += 45) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 8) {
          const rot = rotateY(to3D(lat, lng, r), angle);
          if (rot.z > 0) {
            const x = cx + rot.x;
            const y = cy - rot.y;
            if (!started) {
              ctx.moveTo(x, y);
              started = true;
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        if (started) ctx.stroke();
      }

      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        const rot = rotateY(to3D(p.lat, p.lng, r), angle);
        if (rot.z <= 0) continue;

        const x = cx + rot.x;
        const y = cy - rot.y;
        const depth = (rot.z / r + 1) / 2;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, "hsla(32,95%,60%,0.55)");
        glow.addColorStop(1, "hsla(32,95%,60%,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(32,95%,${58 + depth * 18}%,${0.75 + depth * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.2 + depth * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const fps = Math.min(preferredFps || 30, 30);
    const frameMs = 1000 / fps;

    const speed = reducedMotion ? 0.05 : 0.05;

    const start = () => {
      if (!active || raf) return;
      raf = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!raf) return;
      window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const tick = (t: number) => {
      if (!active || !visible) {
        stop();
        return;
      }

      if (t - last < frameMs) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      last = t;
      draw();
      angle += speed;
      raf = window.requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      if (visible) start();
      else stop();
    };

    setSize();
    draw();
    start();

    window.addEventListener("resize", setSize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", setSize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [active, preferredFps, reducedMotion, points]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ filter: "drop-shadow(0 0 24px hsla(32,95%,44%,0.35))" }}
      aria-hidden="true"
    />
  );
}

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { ref: sectionRef, isInView: sectionInView } = useInView({
    threshold: 0.15,
    rootMargin: "120px",
    once: true,
  });
  const { toast } = useToast();
  const runtime = useRuntimeProfile();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed! 🎉",
      description: "Welcome to our newsletter community",
    });

    window.setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 2500);
  };

  return (
    <section
      ref={sectionRef as RefObject<HTMLElement>}
      className="relative overflow-hidden bg-black/20 py-12 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-marketing-500/20 bg-marketing-500/10 px-4 py-2">
            <Mail className="h-4 w-4 text-marketing-400" />
            <span className="text-sm font-medium text-marketing-300">
              Stay Connected
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-marketing-200 to-white bg-clip-text text-transparent">
              Join Our Newsletter
            </span>
          </h2>

          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            Get exclusive insights, latest updates, and industry trends
            delivered straight to your inbox.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-marketing-500/20 via-marketing-400/10 to-marketing-600/20 p-[2px]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur-xl md:p-10 lg:p-14">
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6 text-center lg:text-left">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                      Stay{" "}
                      <span className="bg-gradient-to-r from-marketing-400 to-marketing-500 bg-clip-text text-gradient">
                        Ahead
                      </span>{" "}
                      of the Curve
                    </h3>
                    <p className="text-base leading-relaxed text-white/70 md:text-lg">
                      Get exclusive development insights, tech trends, code
                      tips, and early access to new projects delivered weekly.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-marketing-400" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isSubscribed}
                          className="rounded-xl border-white/20 bg-white/10 py-3 pl-12 pr-4 text-base text-white placeholder:text-white/50 backdrop-blur-sm focus:border-marketing-500 focus:ring-marketing-500/20 md:py-4"
                        />
                        {isSubscribed ? (
                          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-marketing-500/20 backdrop-blur-sm">
                            <span className="text-sm font-semibold text-marketing-300 md:text-base">
                              Subscribed successfully
                            </span>
                          </div>
                        ) : null}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubscribed}
                        className="whitespace-nowrap rounded-xl border-0 bg-gradient-to-br from-primary via-purple-500 to-indigo-400 px-6 py-3 text-white shadow-lg shadow-marketing-500/30 transition-colors duration-300 hover:bg-primary/90 md:px-8 md:py-4"
                      >
                        <span className="mr-2">Subscribe</span>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-center text-xs text-white/40 sm:text-left">
                      No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative h-64 w-64">
                    <NewsletterGlobe
                      active={sectionInView}
                      reducedMotion={runtime.reducedMotion}
                      preferredFps={runtime.preferredFps}
                    />

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="rounded-2xl border border-white/20 bg-black/40 p-4 text-center shadow-xl backdrop-blur-md">
                        <Globe className="mx-auto mb-2 h-6 w-6 text-marketing-400" />
                        <div className="text-sm font-bold text-marketing-300">
                          Global Reach
                        </div>
                        <div className="text-xs text-white/70">
                          50+ Countries
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-4 -top-4 rounded-full bg-gradient-to-r from-marketing-500 to-marketing-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      10K+ Subscribers
                    </div>
                    <div className="absolute -bottom-4 -left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      Weekly Updates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
