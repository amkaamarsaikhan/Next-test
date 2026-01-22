// components/HeroSlider.jsx
"use client"; // Слайдер солигдоход React-ийн state хэрэгтэй тул энийг заавал бичнэ
import { useState, useEffect } from 'react';
import { sliderImages } from '@/constants/data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // 5 секунд тутамд зураг автоматаар солигдоно
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-slate-900">
      {sliderImages.map((img, index) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={img.url} 
            className="w-full h-full object-cover opacity-60" 
            alt={img.title}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 transform transition-transform duration-700 translate-y-0">
              {img.title}
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      ))}

      {/* Слайд солих цэгүүд (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              index === current ? "w-10 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}