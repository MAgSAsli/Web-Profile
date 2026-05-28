function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            About Me
          </p>
          <h2 className="section-title">Tentang Saya</h2>
          <p className="section-subtitle">
            Saya membangun aplikasi web dengan fokus pada struktur kode yang
            rapi, tampilan responsif, dan integrasi backend yang mudah
            dikembangkan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-950">
              Fullstack learner yang fokus membangun project nyata.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Saya adalah mahasiswa Informatika yang sedang fokus belajar dan
              membangun project fullstack. Saya memiliki pengalaman membuat
              RESTful API, integrasi database, autentikasi, dashboard, serta
              frontend responsif.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Saat ini saya mengembangkan kemampuan di React.js, Node.js,
              Express.js, PostgreSQL, MongoDB, Supabase, serta workflow
              development menggunakan Git, GitHub, Postman, dan VS Code.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-3xl font-extrabold text-cyan-600">4+</p>
              <p className="mt-2 font-semibold text-slate-900">
                Project Portfolio
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Berisi project fullstack, RESTful API, dashboard, dan sistem
                operasional.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-3xl font-extrabold text-emerald-600">API</p>
              <p className="mt-2 font-semibold text-slate-900">
                Backend Development
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Terbiasa membuat endpoint, autentikasi, validasi, dan integrasi
                database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
