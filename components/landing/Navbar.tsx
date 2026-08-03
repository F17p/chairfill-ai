import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
            🪑
          </div>

          <span className="text-xl font-bold text-white">
            ChairFill AI
          </span>
        </Link>


        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

          <Link href="#" className="hover:text-white">
            Product
          </Link>

          <Link href="#" className="hover:text-white">
            How It Works
          </Link>

          <Link href="#" className="hover:text-white">
            Pricing
          </Link>

          {/* Idioma */}
          <button className="rounded-lg border border-white/10 px-3 py-2 hover:bg-white/10">
            🌎 EN
          </button>

        </div>


        {/* CTA */}
        <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500">
          Start Free Trial
        </button>


      </div>
    </nav>
  );
}
