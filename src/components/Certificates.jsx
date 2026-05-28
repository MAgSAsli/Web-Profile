import { certificates } from '../data/certificates.js';

function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Certificates
            </p>

            <h2 className="section-title">Sertifikat Pembelajaran</h2>

            <p className="section-subtitle">
              Sertifikat dari Dicoding yang mendukung kemampuan saya di bidang
              web development, React, JavaScript, backend, database, cloud, dan
              pengembangan aplikasi fullstack.
            </p>
          </div>

          <a href="#contact" className="primary-button">
            Hubungi Saya
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-soft"
            >
              <a
                href={certificate.pdfUrl || certificate.credentialUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="block"
                aria-label={`Buka sertifikat ${certificate.title}`}
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={certificate.image}
                    alt={`Sertifikat ${certificate.title}`}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
              </a>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                    {certificate.issuer}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    ID: {certificate.credentialId}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-950">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  Terbit: {certificate.issuedAt} • Berlaku hingga:{' '}
                  {certificate.expiresAt}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {certificate.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-600"
                  >
                    Credential
                  </a>

                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700"
                  >
                    Lihat PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
