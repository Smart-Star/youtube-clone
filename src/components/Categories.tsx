import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { categories } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSideBarContext } from '../context/SideBarContext';

const TRANSLATE_AMOUNT = 200;

export const Categories = () => {
  const { isLargeOpen } = useSideBarContext();

  const [selected, setSelected] = useState(categories[0]);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    const newTranslate = translate - TRANSLATE_AMOUNT;
    setTranslate(newTranslate <= 0 ? 0 : newTranslate);
  };

  const slideRight = () => {
    if (!containerRef.current) return;

    const visibleWidth = containerRef.current.clientWidth;
    const totalWidth = containerRef.current.scrollWidth;
    const newTranslate = translate + TRANSLATE_AMOUNT;

    setTranslate(
      newTranslate + visibleWidth >= totalWidth
        ? totalWidth - visibleWidth
        : newTranslate
    );

    // console.log('visibleWidth', visibleWidth);
    // console.log('totalWidth', totalWidth);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new window.ResizeObserver((entries) => {
      const container = entries[0].target;

      const visibleWidth = container.clientWidth;
      const totalWidth = container.scrollWidth;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate < totalWidth - visibleWidth);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [translate]);

  return (
    <section
      ref={containerRef}
      className={`${isLargeOpen ? 'max-lg:ml-20 lg:ml-56' : 'ml-20'} pt-4 pb-2.5 relative overflow-hidden`}
    >
      <div
        style={{ transform: `translate(-${translate}px)` }}
        className="flex gap-3 transition-transform duration-300 w-max whitespace-nowrap"
      >
        {categories.map((item, index) => (
          <Button
            key={index + 'w'}
            variant={item === selected ? 'dark' : 'default'}
            onClick={() => setSelected(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <span className="absolute z-30 left-0 top-1/2 -translate-y-1/2 mt-1 w-24 cursor-pointer bg-gradient-to-r from-white from-50% to-transparent">
          <Button variant="ghost" size="icon" onClick={slideLeft}>
            <ChevronLeft />
          </Button>
        </span>
      )}

      {isRightVisible && (
        <span className="absolute z-30 right-0 top-1/2 -translate-y-1/2 mt-1 w-24 h-[34px] flex justify-end cursor-pointer bg-gradient-to-l from-white from-50% to-transparent">
          <Button variant="ghost" size="icon" onClick={slideRight}>
            <ChevronRight />
          </Button>
        </span>
      )}
    </section>
  );
};
