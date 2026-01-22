// components/ScholarshipCard.jsx
import Link from 'next/link';

export default function ScholarshipCard({ id, title, image, description, price }) {
  return (
    <div className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm">
      <img src={image} className="h-52 w-full object-cover" alt={title} />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-sm opacity-70 line-clamp-2">{description}</p>
        
        {/* Dynamic Link */}
        <Link 
          href={`/products/${id}`} 
          className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-2xl font-bold"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </div>
  );
}