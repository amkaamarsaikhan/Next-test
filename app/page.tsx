import HeroSlider from '@/components/HeroSlider';
import ScholarshipCard from '@/components/ScholarshipCard';
import { cardData } from '@/constants/data';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Slider хэсэг */}
      <HeroSlider />

      {/* 2. Картуудын хэсэг */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">
          Онцлох тэтгэлгүүд
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData && cardData.map((item: any) => (
            <ScholarshipCard 
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price="Бүрэн тэтгэлэг"
            />
          ))}
        </div>
      </section>
    </main>
  );
}