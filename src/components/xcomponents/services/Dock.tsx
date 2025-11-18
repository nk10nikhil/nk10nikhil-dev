import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Your Tailwind configuration converted to a usable component
const dockStyles = {
  root: (position: 'top' | 'bottom' | 'left' | 'right') => cn(
    'absolute z-10 flex justify-center items-center pointer-events-none',
    {
      'left-0 bottom-0 w-full': position === 'bottom',
      'left-0 top-0 w-full': position === 'top',
      'left-0 top-0 h-full': position === 'left',
      'right-0 top-0 h-full': position === 'right'
    }
  ),
  container: cn(
    'flex pointer-events-auto',
    'bg-white/10 border-white/20 p-2 border rounded-md backdrop-blur-sm'
  ),
  menu: (position: 'top' | 'bottom' | 'left' | 'right') => cn(
    'm-0 p-0 list-none flex items-center justify-center outline-none',
    {
      'flex-col': position === 'left' || position === 'right'
    }
  ),
  menuItem: (
    position: 'top' | 'bottom' | 'left' | 'right',
    currentIndex: number,
    itemIndex: number
  ) => cn(
    'p-2 rounded-md transition-all duration-200 ease-out transform',
    {
      'origin-bottom hover:mx-6': position === 'bottom',
      'origin-top hover:mx-6': position === 'top',
      'origin-left hover:my-6': position === 'left',
      'origin-right hover:my-6': position === 'right'
    },
    {
      'hover:scale-150': currentIndex === itemIndex,
      'scale-125': currentIndex - 1 === itemIndex || currentIndex + 1 === itemIndex,
      'scale-110': currentIndex - 2 === itemIndex || currentIndex + 2 === itemIndex
    }
  ),
  action: cn(
    'flex flex-col items-center justify-center relative overflow-hidden cursor-pointer',
    'w-16 h-16 rounded-lg hover:bg-white/20 transition-colors'
  )
};

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Dock: React.FC<DockProps> = ({ 
  items, 
  position = 'bottom',
  className 
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentIndex(-1);
  };

  return (
    <div className={cn(dockStyles.root(position), className)}>
      <div className={dockStyles.container}>
        <div 
          ref={dockRef}
          className={dockStyles.menu(position)}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={dockStyles.menuItem(position, currentIndex, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={item.onClick}
            >
              <div className={dockStyles.action}>
                {item.icon}
                <span className="text-xs text-white/80 mt-1 truncate max-w-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dock;