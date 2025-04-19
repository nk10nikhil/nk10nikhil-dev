import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface ParticleSystemProps {
  className?: string;
}

class Particle {
  p5: p5;
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  maxSpeed: number;
  color: number[];
  alpha: number;
  size: number;
  lifespan: number;
  maxLifespan: number;

  constructor(p5: p5, x: number, y: number) {
    this.p5 = p5;
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(-0.5, 0.5), p5.random(-0.5, 0.5));
    this.acc = p5.createVector(0, 0);
    this.maxSpeed = p5.random(0.5, 2);
    
    // Bluish color palette with slight variations
    const hue = p5.random(210, 230);
    const saturation = p5.random(70, 90);
    const brightness = p5.random(60, 90);
    this.color = [hue, saturation, brightness];
    
    this.alpha = p5.random(150, 220);
    this.size = p5.random(2, 6);
    this.maxLifespan = p5.random(100, 200);
    this.lifespan = this.maxLifespan;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 1;
  }

  applyForce(force: p5.Vector) {
    this.acc.add(force);
  }

  follow(flowfield: p5.Vector[][]) {
    const x = this.p5.floor(this.pos.x / 20);
    const y = this.p5.floor(this.pos.y / 20);
    
    const cols = this.p5.floor(this.p5.width / 20);
    const rows = this.p5.floor(this.p5.height / 20);
    
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      const force = flowfield[x][y].copy();
      this.applyForce(force);
    }
  }

  seek(target: p5.Vector) {
    const desired = p5.Vector.sub(target, this.pos);
    const distance = desired.mag();
    let speed = this.maxSpeed;
    
    if (distance < 100) {
      speed = this.p5.map(distance, 0, 100, 0, this.maxSpeed);
    }
    
    desired.setMag(speed);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(0.1);
    this.applyForce(steer);
  }

  avoid(target: p5.Vector, radius: number) {
    const desired = p5.Vector.sub(this.pos, target);
    const distance = desired.mag();
    
    if (distance < radius) {
      desired.setMag(this.maxSpeed);
      const steer = p5.Vector.sub(desired, this.vel);
      steer.limit(0.3);
      this.applyForce(steer);
    }
  }

  display() {
    const p = this.p5;
    
    p.noStroke();
    const alpha = p.map(this.lifespan, 0, this.maxLifespan, 0, this.alpha);
    p.fill(this.color[0], this.color[1], this.color[2], alpha);
    
    p.circle(this.pos.x, this.pos.y, this.size);
  }

  edges() {
    const p = this.p5;
    const buffer = 50;
    
    if (this.pos.x > p.width + buffer) this.pos.x = -buffer;
    if (this.pos.x < -buffer) this.pos.x = p.width + buffer;
    if (this.pos.y > p.height + buffer) this.pos.y = -buffer;
    if (this.pos.y < -buffer) this.pos.y = p.height + buffer;
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchInstance = useRef<p5 | null>(null);

  useEffect(() => {
    if (containerRef.current && !sketchInstance.current) {
      const sketch = (p: p5) => {
        let particles: Particle[] = [];
        let flowfield: p5.Vector[][] = [];
        let cols: number, rows: number;
        let zoff = 0;
        let mousePos: p5.Vector;
        let lastPos: p5.Vector;
        
        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          
          p.colorMode(p.HSB);
          p.frameRate(60);
          p.background(0, 0, 10, 0);
          
          cols = p.floor(p.width / 20);
          rows = p.floor(p.height / 20);
          
          mousePos = p.createVector(p.width / 2, p.height / 2);
          lastPos = mousePos.copy();
          
          // Initialize flow field
          flowfield = Array(cols).fill(0).map(() => 
            Array(rows).fill(0).map(() => p.createVector(0, 0))
          );
          
          // Create initial particles
          for (let i = 0; i < 150; i++) {
            particles.push(new Particle(p, p.random(p.width), p.random(p.height)));
          }
        };
        
        p.draw = () => {
          p.background(220, 10, 10, 5);
          
          lastPos.lerp(mousePos.x, mousePos.y, 0, 0.2);
          
          // Update flow field (perlin noise)
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
              const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2;
              const v = p5.Vector.fromAngle(angle);
              v.setMag(0.1);
              flowfield[x][y] = v;
              yoff += 0.1;
            }
            xoff += 0.1;
          }
          zoff += 0.005;
          
          // Add new particles occasionally
          if (p.frameCount % 3 === 0) {
            particles.push(new Particle(p, p.random(p.width), p.random(p.height)));
          }
          
          // Generate more particles near mouse
          if (p.frameCount % 2 === 0 && p.mouseIsPressed) {
            particles.push(new Particle(p, p.mouseX + p.random(-20, 20), p.mouseY + p.random(-20, 20)));
          }
          
          // Update and display particles
          for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            
            particle.follow(flowfield);
            
            if (p.mouseIsPressed || p.touches.length > 0) {
              particle.avoid(mousePos, 100);
            } else {
              particle.seek(mousePos);
            }
            
            particle.update();
            particle.edges();
            particle.display();
            
            if (particle.isDead()) {
              particles.splice(i, 1);
            }
          }
          
          // Keep particle count reasonable
          while (particles.length > 600) {
            particles.shift();
          }
        };
        
        p.mouseMoved = () => {
          mousePos.x = p.mouseX;
          mousePos.y = p.mouseY;
        };
        
        p.touchMoved = () => {
          if (p.touches.length > 0) {
            mousePos.x = (p.touches[0] as any).x;
            mousePos.y = (p.touches[0] as any).y;
          }
          return false; // Prevent default
        };
        
        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          cols = p.floor(p.width / 20);
          rows = p.floor(p.height / 20);
          
          // Resize flow field when window resizes
          flowfield = Array(cols).fill(0).map(() => 
            Array(rows).fill(0).map(() => p.createVector(0, 0))
          );
        };
      };
      
      sketchInstance.current = new p5(sketch, containerRef.current);
    }
    
    return () => {
      if (sketchInstance.current) {
        sketchInstance.current.remove();
        sketchInstance.current = null;
      }
    };
  }, []);
  
  return <div id="p5-container" ref={containerRef} className={className} />;
};

export default ParticleSystem;
