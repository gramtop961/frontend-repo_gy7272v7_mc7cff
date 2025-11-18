import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2000&auto=format&fit=crop" alt="Menswear" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium bg-black text-white rounded-full px-3 py-1 mb-4">
            New Drop
            <span className="opacity-70">AW/25 Collection</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Minimal silhouettes. Maximum impact.
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Elevated essentials engineered for comfort, designed for conversion: fast load, clear actions, high trust.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full hover:opacity-90">
              Shop New Arrivals
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:bg-black/5">
              Explore Collections
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-black/70">
            <div>• Free 2-5 day shipping</div>
            <div>• Carbon neutral deliveries</div>
            <div>• 30-day risk-free returns</div>
          </div>
        </div>
      </div>
    </section>
  );
}
