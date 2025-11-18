import { ShoppingBag, Search, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="text-xl font-bold tracking-tight">Noir Menswear</a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#new" className="hover:text-black/70">New</a>
            <a href="#best" className="hover:text-black/70">Bestsellers</a>
            <a href="#collections" className="hover:text-black/70">Collections</a>
            <a href="#editorial" className="hover:text-black/70">Editorial</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-black/5 rounded-full"><Search className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-black/5 rounded-full"><User className="w-5 h-5" /></button>
            <button className="relative p-2 hover:bg-black/5 rounded-full">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full px-1">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
