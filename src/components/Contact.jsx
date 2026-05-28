function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');

    alert(`Terima kasih, ${name}! Pesan kamu berhasil disiapkan.`);
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Contact
            </p>
            <h2 className="section-title">Mari Terhubung</h2>
            <p className="section-subtitle">
              Saya terbuka untuk kesempatan magang, kolaborasi project, dan
              diskusi seputar pengembangan aplikasi web fullstack.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:mochamadagils@gmail.com"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <p className="mt-1 font-bold text-slate-950">
                  mochamadagils@gmail.com
                </p>
              </a>

              <a
                href="https://github.com/MAgSAsli"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-500">GitHub</p>
                <p className="mt-1 font-bold text-slate-950">
                  github.com/MAgSAsli
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/mochamad-agil-sugiarto/"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-500">
                  LinkedIn
                </p>
                <p className="mt-1 font-bold text-slate-950">
                  linkedin.com/in/mochamad-agil-sugiarto
                </p>
              </a>

              <a
                href="https://wa.me/6281235069383"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-500">
                  WhatsApp
                </p>
                <p className="mt-1 font-bold text-slate-950">
                  +62 812 3506 9383
                </p>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Masukkan nama kamu"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tulis pesan kamu..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <button type="submit" className="primary-button w-full">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
