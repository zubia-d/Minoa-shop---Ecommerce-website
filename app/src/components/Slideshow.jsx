import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/crousel1.png",
  },
  {
    id: 2,
    image: "/crousel3.png",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full mt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${index === current ? "block" : "hidden"}`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="
              w-full 
              sm:h-[350px] md:h-[450px] lg:h-[550px] 
              object-cover rounded-lg
            "
          />
        </div>
      ))}

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/70"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/70"
      >
        &#10095;
      </button>
    </div>
  );
}
