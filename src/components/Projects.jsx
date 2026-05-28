import { projects } from '../data/projects.js';

function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Projects
            </p>
            <h2 className="section-title">Project Pilihan untuk Recruiter</h2>
            <p className="section-subtitle">
              Beberapa project yang menunjukkan kemampuan saya dalam membuat
              frontend responsif, RESTful API, integrasi database, autentikasi,
              dan dashboard aplikasi.
            </p>
          </div>

          <a href="#contact" className="primary-button">
            Rekrut Saya
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                  {project.highlight}
                </span>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white transition group-hover:bg-cyan-600">
                  {project.id}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                {project.name}
              </h3>

              <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.githubUrl}
                  className="secondary-button"
                  aria-label={`Buka GitHub ${project.name}`}
                >
                  GitHub
                </a>

                <a
                  href={project.demoUrl}
                  className="primary-button"
                  aria-label={`Buka live demo ${project.name}`}
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
