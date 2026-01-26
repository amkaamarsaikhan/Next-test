import { cardData } from '@/constants/data';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: any) {
  // params.id-г ашиглан датагаа шүүж байна
  const item = cardData.find((p: any) => p.id.toString() === params.id);

  // Хэрэв дата олдохгүй бол 404 гаргана
  if (!item) return notFound();

  return (
    <div className="min-h-screen bg-background p-10 md:p-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-black text-primary italic uppercase tracking-tighter">
          {item.title}
        </h1>
        <div className="h-96, w-full rounded-[3rem] overflow-hidden shadow-2xl">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold text-accent italic">Бүрэн тэтгэлэг</p>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
          <p className="text-xl text-foreground opacity-80 leading-relaxed pt-4">
            {item.description}. Энэхүү тэтгэлэг нь таныг ирээдүйн боловсролдоо том алхам хийхэд тусална.
          </p>
        </div>
      </div>
    </div>
  );
}