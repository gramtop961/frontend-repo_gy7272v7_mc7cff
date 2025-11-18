import { ShieldCheck, Leaf, RefreshCw, Clock } from "lucide-react";

export default function ValueProps() {
  const items = [
    { icon: ShieldCheck, title: "Quality guaranteed", desc: "Materials tested for durability and comfort" },
    { icon: Leaf, title: "Sustainable", desc: "Ethically sourced, lower-impact production" },
    { icon: RefreshCw, title: "Easy returns", desc: "Free 30-day returns and instant exchanges" },
    { icon: Clock, title: "Fast shipping", desc: "2–5 day delivery with tracking" },
  ];

  return (
    <section className="border-y bg-white/70">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-black text-white">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-black/60">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
