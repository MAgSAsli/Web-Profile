const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-8 text-white sm:px-8 lg:px-12">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-300">
          © {currentYear} Moch. Agil Sugiarto. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/MAgSAsli"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:mochamadagils@gmail.com"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
