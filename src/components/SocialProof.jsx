import { Star } from "lucide-react";

const reviews = [
  { name: "Daniel", copy: "Best-fitting tee I’ve owned. Thick, holds shape.", rating: 5 },
  { name: "Arjun", copy: "Denim is legit. Heavy, clean taper, great fade.", rating: 5 },
  { name: "Leo", copy: "The puffer is warm without bulk. Crazy good.", rating: 5 },
];

export default function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="best">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">What customers say</h2>
        <div className="text-sm text-black/60">4.8 average rating from 12,431+ reviews</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <div key={r.name} className="border rounded-xl p-5 bg-white">
            <div className="flex gap-1 text-amber-500 mb-2">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-black/80">“{r.copy}”</p>
            <div className="mt-3 text-sm font-medium">{r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
