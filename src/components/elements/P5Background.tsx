
import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5BackgroundProps {
  className?: string;
}

const P5Background = ({ className = "" }: P5BackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const particleCount = 100;
      
      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        size: number;
        color: string;
        maxSpeed: number;
        alpha: number;
        
        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(p.random(-0.3, 0.3), p.random(-0.3, 0.3));
          this.acc = p.createVector(0, 0);
          this.size = p.random(2, 4);
          this.maxSpeed = p.random(5.5, 10.5);
          this.alpha = p.random(150, 255);
          
          const colorRand = p.random(100);
          if (colorRand < 60) {
            this.color = "#0CE5FF"; // Cyber blue
          } else if (colorRand < 90) {
            this.color = "#FF006C"; // Cyber pink
          } else {
            this.color = "#01FF89"; // Cyber green
          }
        }
        
        update() {
          // Mouse interaction with smooth attraction/repulsion
          if (p.mouseIsPressed) {
            const mouse = p.createVector(p.mouseX, p.mouseY);
            const dir = p5.Vector.sub(mouse, this.pos);
            const d = dir.mag();
            dir.normalize();
            if (d < 200) {
              const force = p.map(d, 0, 200, 0.5, 0);
              dir.mult(force);
              this.acc.add(dir);
            }
          }
          
          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
          
          // Wrap around edges with smooth transition
          if (this.pos.x > p.width) this.pos.x = 0;
          if (this.pos.x < 0) this.pos.x = p.width;
          if (this.pos.y > p.height) this.pos.y = 0;
          if (this.pos.y < 0) this.pos.y = p.height;
        }
        
        show() {
          p.noStroke();
          const c = p.color(this.color);
          c.setAlpha(this.alpha);
          p.fill(c);
          
          // Enhanced glow effect
          p.drawingContext.shadowBlur = 20;
          p.drawingContext.shadowColor = this.color;
          p.circle(this.pos.x, this.pos.y, this.size);
          p.drawingContext.shadowBlur = 0;
        }
        
        connect(particles: Particle[]) {
          particles.forEach(other => {
            const d = p5.Vector.dist(this.pos, other.pos);
            if (d < 120) {
              const alpha = p.map(d, 0, 120, 100, 0);
              p.stroke(`${this.color}${Math.floor(alpha).toString(16).padStart(2, '0')}`);
              p.line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            }
          });
        }
      }
      
      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };
      
      p.draw = () => {
        p.clear();
        
        // Enhanced grid effect
        p.stroke('rgba(12, 229, 255, 0.05)');
        const gridSize = 40;
        for (let x = 0; x < p.width; x += gridSize) {
          p.line(x, 0, x, p.height);
        }
        for (let y = 0; y < p.height; y += gridSize) {
          p.line(0, y, p.width, y);
        }
        
        particles.forEach(particle => {
          particle.update();
          particle.show();
        });
        
        particles.forEach(particle => {
          particle.connect(particles);
        });
      };
      
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    sketchRef.current = new p5(sketch, containerRef.current);

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 bg-cyber-black/30 backdrop-blur-[100px] ${className}`}
    />
  );
};

export default P5Background;
