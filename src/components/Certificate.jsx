// Import your certificate images
import Cert1 from "../assets/AI.jpg";
import Cert2 from "../assets/django.jpeg";
import Cert3 from "../assets/mysql.jpg";

const Certificate = () => {
  const certificates = [
    {
      title: "Generative AI Specialization",
      issuer: "Coursera / DeepLearning.AI",
      image: Cert1,
      link: "#", // link to view/download certificate
    },
    {
      title: "Full Stack Development with React & Django",
      issuer: "Udemy",
      image: Cert2,
      link: "#",
    },
    {
      title: "Database Management with MySQL",
      issuer: "Great Learning",
      image: Cert3,
      link: "#",
    },
  ];

  return (
    <section
      id="certificate"
      className="px-6 md:px-12 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-hero-font mb-6 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x ">
          Certificates
        </h1>
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light">
          Some of my certifications that showcase my learning journey
        </p>

        {/* Certificate Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 hover:border-violet-500 hover:shadow-violet-500/40 overflow-hidden transition-all duration-500"
            >
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6 text-left">
                <h2 className="text-xl font-bold text-violet-400 group-hover:text-pink-400 transition">
                  {cert.title}
                </h2>
                <p className="mt-2 text-gray-400 text-sm italic">
                  {cert.issuer}
                </p>

                {/* View Certificate Button */}
                <div className="mt-5">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg shadow-md hover:opacity-90 transition font-semibold"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
