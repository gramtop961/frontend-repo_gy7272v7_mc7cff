import { Star, Heart, ShoppingCart } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    title: "Apex Puffer Jacket",
    price: 189,
    rating: 4.7,
    reviews: 214,
    img: "https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop",
    badges: ["Bestseller"],
  },
  {
    id: 2,
    title: "Heavyweight Tee",
    price: 39,
    rating: 4.5,
    reviews: 852,
    img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
    badges: ["New"],
  },
  {
    id: 3,
    title: "Selvedge Denim",
    price: 129,
    rating: 4.6,
    reviews: 431,
    img: "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?q=80&w=1200&auto=format&fit=crop",
    badges: ["Limited"],
  },
  {
    id: 4,
    title: "Minimal Hoodie",
    price: 79,
    rating: 4.8,
    reviews: 1290,
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
    badges: ["Staff pick"],
  },
];

function Rating({ value }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < full ? "currentColor" : "none"} />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="shop">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">New arrivals</h2>
        <div className="text-sm text-black/60">Drag & drop your products in Shopify — they’ll render here</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleProducts.map((p) => (
          <div key={p.id} className="group border rounded-xl overflow-hidden bg-white">
            <div className="relative">
              <img src={p.img} alt={p.title} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="text-xs bg-white/90 backdrop-blur px-2 py-1 rounded-full border">{b}</span>
                ))}
              </div>
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white">
                <Heart size={16} />
              </button>
              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                <ShoppingCart size={16} /> Quick Add
              </button>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-black/60">
                    <Rating value={p.rating} />
                    <span>({p.reviews})</span>
                  </div>
                </div>
                <div className="font-semibold">${p.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
