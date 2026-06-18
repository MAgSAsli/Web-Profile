export const projects = [

  {
    id: 1,
    name: 'OpenJob RESTful API',
    description:
      'RESTful API untuk platform lowongan kerja dengan fitur authentication, job management, application management, caching Redis, message queue RabbitMQ, dan upload dokumen PDF.',
    techStack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
    ],
    githubUrl: 'https://github.com/MAgSAsli/openjob-v2',
    highlight: 'Backend API',
  },
  {
    id: 2,
    name: 'OutVentura',
    description:
      'Aplikasi web tugas kuliah dengan integrasi API, fitur analisis, dan tampilan dashboard interaktif.',
    techStack: ['React.js', 'Express.js', 'PostgreSQL / Supabase', 'MidTrans'],
    githubUrl: 'https://github.com/MAgSAsli/OutVentura',
    demoUrl: 'https://out-ventura-vpiw.vercel.app/',
    image: '/projects/Outventura.jpg',
    highlight: 'Tugas Kuliah',
  },
  {
  id: 3,
  name: 'VentureCraft',
  description:
    'Aplikasi web capstone project Dicoding untuk membantu menganalisis kelayakan ide bisnis berdasarkan modal, biaya operasional, harga jual, target pembeli, dan estimasi keuntungan. Aplikasi ini menampilkan hasil analisis seperti skor kelayakan, risiko, BEP, ROI, payback period, serta dashboard interaktif.',
  techStack: ['React.js', 'Express.js', 'Supabase', 'Tailwind CSS'],
  githubUrl: '',
  demoUrl: 'https://venture-craft-96kf.vercel.app/',
  image: '/projects/VentureCraft.jpg',
  highlight: 'Capstone Project',
}
];
