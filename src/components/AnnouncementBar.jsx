import { Megaphone, Truck, BadgeCheck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Megaphone size={16} />
          <span>Black Friday Preview — 20% off sitewide applied at checkout</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-white/80">
          <div className="flex items-center gap-2"><Truck size={16} /><span>Free shipping over $75</span></div>
          <div className="flex items-center gap-2"><BadgeCheck size={16} /><span>30-day free returns</span></div>
        </div>
      </div>
    </div>
  );
}
