import { skills } from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Skills
          </p>

          <h2 className="section-title">Skill yang Saya Gunakan</h2>

          <p className="section-subtitle">
            Teknologi yang saya gunakan untuk membangun aplikasi web dari sisi
            frontend, backend, database, hingga tools pendukung.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.category}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {skillGroup.category}
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md"
                  >
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="h-9 w-9 object-contain transition group-hover:scale-110"
                    />

                    <p className="mt-3 text-sm font-semibold text-slate-700">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;