
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  const color = light ? "white" : "black";
  const textColor = light ? "#CBD5E1" : "#1E293B"; // slate-300 or slate-800

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 400 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Large V and J Background */}
        <text 
          x="80" 
          y="150" 
          fill={color} 
          style={{ font: 'italic 200px serif', opacity: 1 }}
        >
          V
        </text>
        <text 
          x="220" 
          y="150" 
          fill={color} 
          style={{ font: 'italic 200px serif', opacity: 1 }}
        >
          J
        </text>

        {/* Horizontal Line and Text Overlay Area */}
        <rect x="0" y="94" width="120" height="2" fill={color} />
        <rect x="280" y="94" width="120" height="2" fill={color} />
        
        {/* VANNIEJAY Text */}
        <text 
          x="200" 
          y="102" 
          fill={color} 
          textAnchor="middle" 
          style={{ font: 'bold 28px sans-serif', letterSpacing: '0.2em' }}
        >
          VANNIEJAY
        </text>
      </svg>
    </div>
  );
};

export default Logo;
