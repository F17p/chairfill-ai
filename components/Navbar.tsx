export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B0F19]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
            🪑
          </div>

          <span className="text-xl font-bold text-white">
            ChairFill <span className="text-blue-500">AI</span>
          </span>
        </div>


        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#" className="hover:text-white transition">
            Product
          </a>

          <a href="#" className="hover:text-white transition">
            How It Works
          </a>

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
        </div>


        {/* Buttons */}
        <div className="flex items-center gap-3">

          <button className="hidden sm:block text-sm text-slate-300 hover:text-white">
            Log in
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
            Start Free Trial
          </button>

        </div>

      </div>
    </nav>
  );
}
