import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaintBackground: React.FC = () => {
  const location = useLocation();
  const [colors, setColors] = useState<string[]>([
    'rgba(109, 40, 217, 0.2)',  // purple
    'rgba(236, 72, 153, 0.2)',  // pink
    'rgba(245, 158, 11, 0.2)',  // yellow
    'rgba(59, 130, 246, 0.2)',  // blue
  ]);

  useEffect(() => {
    // Change colors based on route
    switch (location.pathname) {
      case '/':
        setColors([
          'rgba(109, 40, 217, 0.2)',  // purple
          'rgba(236, 72, 153, 0.2)',  // pink
          'rgba(245, 158, 11, 0.2)',  // yellow
          'rgba(59, 130, 246, 0.2)',  // blue
        ]);
        break;
      case '/gallery':
        setColors([
          'rgba(16, 185, 129, 0.2)',  // green
          'rgba(245, 158, 11, 0.2)',  // yellow
          'rgba(59, 130, 246, 0.2)',  // blue
          'rgba(139, 92, 246, 0.2)',  // purple
        ]);
        break;
      case '/about':
        setColors([
          'rgba(236, 72, 153, 0.2)',  // pink
          'rgba(245, 158, 11, 0.2)',  // yellow
          'rgba(220, 38, 38, 0.2)',   // red
          'rgba(16, 185, 129, 0.2)',  // green
        ]);
        break;
      case '/contact':
        setColors([
          'rgba(59, 130, 246, 0.2)',  // blue
          'rgba(139, 92, 246, 0.2)',  // purple
          'rgba(16, 185, 129, 0.2)',  // green
          'rgba(236, 72, 153, 0.2)',  // pink
        ]);
        break;
      case '/blog':
        setColors([
          'rgba(245, 158, 11, 0.2)',  // yellow
          'rgba(16, 185, 129, 0.2)',  // green
          'rgba(236, 72, 153, 0.2)',  // pink
          'rgba(59, 130, 246, 0.2)',  // blue
        ]);
        break;
      default:
        setColors([
          'rgba(109, 40, 217, 0.2)',  // purple
          'rgba(236, 72, 153, 0.2)',  // pink
          'rgba(245, 158, 11, 0.2)',  // yellow
          'rgba(59, 130, 246, 0.2)',  // blue
        ]);
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div 
        className="paint-stroke floating" 
        style={{
          top: '15%',
          left: '10%',
          width: '30vw',
          height: '45vh',
          backgroundColor: colors[0],
          transform: 'rotate(15deg)',
        }}
      />
      <div 
        className="paint-stroke floating floating-delay-1" 
        style={{
          top: '40%',
          right: '10%',
          width: '35vw',
          height: '55vh',
          backgroundColor: colors[1],
          transform: 'rotate(-20deg)',
        }}
      />
      <div 
        className="paint-stroke floating floating-delay-2" 
        style={{
          bottom: '15%',
          left: '20%',
          width: '40vw',
          height: '30vh',
          backgroundColor: colors[2],
          transform: 'rotate(5deg)',
        }}
      />
      <div 
        className="paint-stroke floating floating-delay-3" 
        style={{
          top: '5%',
          right: '15%',
          width: '25vw',
          height: '40vh',
          backgroundColor: colors[3],
          transform: 'rotate(-10deg)',
        }}
      />
    </div>
  );
};

export default PaintBackground;