export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Texto */}
        <div>

          <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            AI-powered appointment recovery
          </div>


          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Fill Every Empty Chair.
            <span className="text-blue-500">
              {" "}Automatically.
            </span>
          </h1>


          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            ChairFill AI uses artificial intelligence to recover cancelled
            appointments, reduce no-shows and help dental clinics increase
            revenue automatically.
          </p>


          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500">
              Start Free Trial
            </button>


            <button className="rounded-xl border border-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              Watch Demo
            </button>

          </div>


          <div className="mt-8 flex gap-8 text-sm text-slate-400">

            <div>
              <strong className="block text-xl text-white">
                30%
              </strong>
              fewer no-shows
            </div>


            <div>
              <strong className="block text-xl text-white">
                24/7
              </strong>
              AI monitoring
            </div>


          </div>

        </div>



        {/* Dashboard Preview */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

          <div className="rounded-2xl bg-[#111827] p-6">

            <div className="flex justify-between">
              <h2 className="font-semibold text-white">
                ChairFill AI Dashboard
              </h2>

              <span className="text-green-400">
                ● Online
              </span>
            </div>


            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-white/5 p-4 text-slate-300">
                Today's Appointments
                <p className="mt-2 text-white">
                  24 scheduled
                </p>
              </div>


              <div className="rounded-xl bg-blue-600/20 p-4 text-slate-300">
                AI recovered
                <p className="mt-2 text-2xl font-bold text-white">
                  +12 appointments
                </p>
              </div>


              <div className="rounded-xl bg-white/5 p-4 text-slate-300">
                Revenue protected
                <p className="mt-2 text-2xl font-bold text-white">
                  $4,850
                </p>
              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
