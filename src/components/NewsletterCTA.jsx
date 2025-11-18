export default function NewsletterCTA() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Get first access</h3>
          <p className="text-white/70 mt-2">New drops, back-in-stock alerts, and limited releases.</p>
        </div>
        <form className="flex gap-3">
          <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-full bg-white text-black placeholder-black/50" />
          <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90">Sign up</button>
        </form>
      </div>
    </section>
  );
}
