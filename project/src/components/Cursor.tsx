import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const mouseDownHandler = () => setIsClicking(true);
    const mouseUpHandler = () => setIsClicking(false);

    const pointerHandler = () => {
      const hoveredElements = document.querySelectorAll(':hover');
      const isPointerFound = Array.from(hoveredElements).some(element => {
        const style = window.getComputedStyle(element);
        return style.cursor === 'pointer';
      });
      setIsPointer(isPointerFound);
    };
    
    const mouseLeaveHandler = () => setIsHidden(true);
    const mouseEnterHandler = () => setIsHidden(false);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', pointerHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', pointerHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, []);

  // For mobile devices, don't show the custom cursor
  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isPointer || isClicking ? '50px' : '20px',
          height: isPointer || isClicking ? '50px' : '20px',
          opacity: isHidden ? 0 : 1,
          backgroundColor: isClicking ? 'var(--secondary)' : 'var(--primary)'
        }}
      />
      <div 
        className="cursor-follower" 
        style={{ 
          left: `${followerPosition.x}px`, 
          top: `${followerPosition.y}px`,
          opacity: isHidden ? 0 : 0.5,
          width: isPointer ? '10px' : '40px',
          height: isPointer ? '10px' : '40px',
          backgroundColor: isClicking ? 'var(--secondary-light)' : 'var(--primary-light)'
        }}
      />
    </>
  );
};

export default Cursor;