const Internship = () => {
  const internships = [

    {
  role: "System Analyst Apprentice",
  company: "Lumina Datamatics",

  description:
    "Worked as Data Management Analyst supporting US construction and real estate projects. Performed data validation, data cleaning, and quality checks to ensure accurate project data. Maintained project details in CRM systems and used Excel, SQL concepts, Gen AI, and automation tools to deliver reliable and structured data.",
    },
    {
      role: "Backend Intern (Python Django)",
      company: "Suven Consultant and Technology",
  
      description:
        "Built and maintained backend features using Python-Django, including database integration and API development. Assisted in creating responsive web pages with HTML, CSS, and JavaScript. Worked closely with the team to resolve UI/UX issues, optimize performance, and follow best coding practices during code reviews.",
      certificate: "/suven_cert.jpg",
    },
    {
      role: "Web Development Intern",
      company: "CADD Prime Enterprises",
      description:
        "Developed and optimized interactive web pages using React.js and modern frontend practices. Enhanced responsiveness across devices, ensured cross-browser compatibility, and contributed to smooth project deployment workflows.",
      certificate: "/cadd_cert.jpg",
    },
  ];

  return (
    <section
      id="internship"
      className="px-6 md:px-12 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-hero-font mb-12 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
          Experience
        </h1>

        {/* Internship Cards */}
        <div className="space-y-10">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-violet-500 rounded-2xl shadow-lg p-8 text-left hover:scale-105 transition-all duration-500 group"
            >
              {/* Left Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 to-pink-500 rounded-l-2xl"></span>

              <h2 className="text-2xl font-bold text-violet-400 group-hover:text-pink-400 transition">
                {intern.role}
              </h2>
              <h3 className="text-lg font-semibold text-pink-400 mt-1">
                {intern.company}
              </h3>
              <p className="text-sm text-gray-400 italic mt-1">
                {intern.duration}
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {intern.description}
              </p>

              {/* View Certificate Button */}
            {/* View Certificate Button only if available */}
{intern.certificate && (
  <div className="mt-6">
    <a
      href={intern.certificate}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-violet-500/40 transition transform hover:scale-105"
    >
      View Certificate
    </a>
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

