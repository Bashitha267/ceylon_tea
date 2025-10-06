import { useEffect, useState } from 'react';
import logo from "../public/tealogo.png";
export default function LoadingScreen({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 700); 
          return 100;
        }
        return prev + 5; 
      });
    }, 100); 

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer green circle - acts as the background for the fill */}
        <div className="absolute inset-0 rounded-full bg-green-500"></div>

        {/* The filling circle that reveals the green background */}
        <div
          className="absolute inset-0 rounded-full bg-white origin-right transition-transform duration-700 ease-out" // <-- Change is here
          style={{
            transform: `scaleX(${1 - progress / 100})`, 
          }}
        ></div>

        {/* The tea leaf icon, centered on top */}
        <img
          src={logo}
          alt="Ceylon Tea Collection Logo"
          className=" relative z-10"
        />
      </div>
    </div>
  );
}