export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Texto */}
        <div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Fill Every Empty Chair.
            <span className="text-blue-500">
              {" "}Automatically.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-400">
            ChairFill AI uses artificial intelligence to recover cancelled
            appointments, reduce no-shows and help dental clinics increase
            revenue automatically.
          </p>


          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
              Start Free Trial
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Watch Demo
            </button>

          </div>

        </div>


        {/* Dashboard Mockup */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="rounded-2xl bg-[#111827] p-6">

            <h3 className="text-white font-semibold">
              ChairFill AI Dashboard
            </h3>

            <div className="mt-6 space-y-4 text-sm text-slate-300">

              <div className="rounded-xl bg-white/5 p-4">
                Today's Appointments
                <br />
                <span className="text-white">
                  09:00 Cleaning
                </span>
              </div>


              <div className="rounded-xl bg-blue-600/20 p-4">
                ⚡ AI Recovered
                <br />
                <span className="text-white text-xl">
                  +12 appointments
                </span>
              </div>


              <div className="rounded-xl bg-white/5 p-4">
                Revenue Saved
                <br />
                <span className="text-green-400 text-xl">
                  $4,850
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
