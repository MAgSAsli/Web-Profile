const experiences = [
  'Belajar Fundamental Back-End dengan JavaScript - Dicoding',
  'Mengerjakan submission OpenJob RESTful API',
  'Membangun project fullstack menggunakan React.js dan Node.js',
];

function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Experience
          </p>
          <h2 className="section-title">Learning Journey</h2>
          <p className="section-subtitle">
            Perjalanan belajar dan pengalaman project yang mendukung kesiapan
            saya untuk posisi Fullstack Developer Intern.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-slate-200">
            {experiences.map((experience, index) => (
              <div key={experience} className="relative flex gap-5">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                  {index + 1}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white">
                  <h3 className="font-bold text-slate-950">{experience}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fokus pada pemahaman konsep, implementasi fitur, debugging,
                    dan penyusunan project agar lebih siap digunakan sebagai
                    portofolio.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
