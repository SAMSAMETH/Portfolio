// Import your workshop images or logos
import LateetudImg from "../assets/workshop.jpg";
import TechmImg from "../assets/venda.png";

const Workshop = () => {
  const workshops = [
    {
      title: "Agentic AI on Google ADK Workshop",
      company: "Spritle",
      place: "Maduravoyal, Chennai, India",
      date: "August 23,2025",
      image: LateetudImg,
      details:
        "Hands-on workshop on Generative AI, Agentic AI, and Automation workflows. Learned about RAG Agents, Multi-Agents, and practical enterprise AI solutions.",
      certification: "/spritle-certification.pdf", // ✅ image inside /public folder
    },
    {
      title: "AI & the Future of coding workshop",
      company: "Vendasta",
      place: "Chennai, India",
      date: "Aug 2025",
      image: TechmImg,
      details:
        "Ideas On Tap - AI & the Future of Coding: From Automation to Vibe Coding",
    },
  ];

  return (
    <section
      id="workshop-events"
      className="px-6 md:px-12 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-hero-font mb-6 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
          Workshop Events
        </h1>
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light">
          Workshops and bootcamps I attended to sharpen my technical skills
        </p>

        {/* Workshop Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:shadow-violet-500/40 overflow-hidden hover:scale-105 transition-all duration-500"
            >
              {/* Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 to-pink-500"></span>

              {/* Workshop Image */}
              <div className="overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.company}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Workshop Details */}
              <div className="p-6 text-left">
                <h2 className="text-xl font-bold text-violet-400 group-hover:text-pink-400 transition">
                  {workshop.title}
                </h2>
                <h3 className="text-lg font-semibold text-pink-400">
                  {workshop.company}
                </h3>
                <p className="text-sm text-gray-400 italic">
                  {workshop.place} • {workshop.date}
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {workshop.details}
                </p>

                {/* ✅ View Certification button only if certification exists */}
                {workshop.certification && (
                  <div className="mt-6">
                    <a
                      href={workshop.certification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg shadow-md transition"
                    >
                      View Certification
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshop;
