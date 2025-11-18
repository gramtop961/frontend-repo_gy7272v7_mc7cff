export default function Footer() {
  const cols = [
    {
      title: "Shop",
      links: ["New Arrivals", "Bestsellers", "Collections", "Gift Cards"],
    },
    {
      title: "Help",
      links: ["Contact", "Shipping", "Returns", "Size Guide"],
    },
    {
      title: "Company",
      links: ["About", "Sustainability", "Careers", "Press"],
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="text-xl font-bold">Noir Menswear</div>
          <p className="text-black/60 mt-2">Contemporary essentials designed for everyday performance.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-semibold mb-3">{c.title}</div>
            <ul className="space-y-2 text-black/70">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-black">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t py-4 text-center text-sm text-black/60">© {new Date().getFullYear()} Noir Menswear</div>
    </footer>
  );
}
