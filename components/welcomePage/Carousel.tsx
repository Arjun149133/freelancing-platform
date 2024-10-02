import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect, ReactNode } from "react";
import ChangeButton from "./ChangeButton";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: ReactNode[];
}) {
  const [curr, setCurr] = useState(0);
  const [idx, setIdx] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const handleButton = (i:number) => {
      setCurr(i)
  }
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500 w-full h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full">{slide}</div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <ChangeButton ele={<ChevronLeftIcon />} onClick={prev} />
        <ChangeButton ele={<ChevronRightIcon />} onClick={next} />
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              onClick={() => handleButton(i)}
              key={i}
              className={`transition-all w-3 h-3 bg-slate-900 rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
