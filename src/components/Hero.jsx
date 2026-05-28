function Hero() {
  const profilePhoto = '/Agil.png';

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
            Available for Fullstack Developer Intern
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, saya{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Moch. Agil Sugiarto
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Fullstack Developer Intern
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Mahasiswa Informatika yang tertarik pada pengembangan aplikasi web
            fullstack menggunakan React.js, Node.js, Express.js, dan database
            seperti PostgreSQL, MongoDB, serta Supabase.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Lihat Project
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/30 to-emerald-400/30 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <img
                src={profilePhoto}
                alt="Foto Moch. Agil Sugiarto"
                className="h-[420px] w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300 sm:text-sm">
                <p>
                  <span className="text-cyan-300">const</span> developer = {'{'}
                </p>
                <p className="pl-4">
                  role:{' '}
                  <span className="text-emerald-300">
                    &quot;Fullstack Developer Intern&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  stack:{' '}
                  <span className="text-emerald-300">
                    [&quot;React&quot;, &quot;Node&quot;, &quot;Supabase&quot;]
                  </span>
                </p>
                <p>{'}'};</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;