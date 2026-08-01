export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          AI for Dental Clinics
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Never Let Another
          <span className="text-blue-600"> Dental Chair </span>
          Stay Empty.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          ChairFill AI automatically fills cancelled appointments using
          artificial intelligence, helping dental clinics recover lost revenue.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Start Free Trial
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100">
            Book a Demo
          </button>
        </div>
      </section>
    </main>
  );
}
