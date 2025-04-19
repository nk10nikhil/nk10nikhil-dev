
import React from "react";

const BlurBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Main background color */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Large gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[60%] bg-indigo-900/30 rounded-full filter blur-[120px]" />
      <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] bg-blue-900/20 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-primary/30 rounded-full filter blur-[90px]" />

      {/* Overlay to adjust contrast */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-3xl"></div>

      {/* Noise texture (optional - comment out if not working well) */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BlurBackground;
