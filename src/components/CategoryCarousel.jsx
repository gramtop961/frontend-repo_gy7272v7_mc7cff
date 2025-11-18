import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  { title: "Outerwear", img: "https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop" },
  { title: "Tees", img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Denim", img: "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?q=80&w=1200&auto=format&fit=crop" },
  { title: "Tailoring", img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1200&auto=format&fit=crop" },
  { title: "Footwear", img: "https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop" },
  { title: "Accessories", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop" },
];

export default function CategoryCarousel() {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (!ref.current) return;
    const amount = dir === "left" ? -320 : 320;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="collections">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop by category</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full border hover:bg-black/5"><ChevronLeft /></button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full border hover:bg-black/5"><ChevronRight /></button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <a key={c.title} href="#shop" className="min-w-[280px] snap-start group relative rounded-2xl overflow-hidden">
            <img src={c.img} alt={c.title} className="h-64 w-[280px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white font-semibold">
              {c.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
