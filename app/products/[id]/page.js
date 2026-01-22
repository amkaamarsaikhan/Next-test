import { cardData } from '@/constants/data';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }) {
  const item = cardData.find((p) => p.id.toString() === params.id);

  if (!item) return notFound();

  return (
    <div className="p-20">
      <h1 className="text-4xl font-black">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full h-96 object-cover my-10 rounded-3xl" />
      <p className="text-xl">{item.description}</p>
      <p className="font-bold mt-4 text-blue-600">Үнэ: Бүрэн тэтгэлэг</p>
    </div>
  );
}