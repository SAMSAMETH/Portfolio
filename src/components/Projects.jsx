// Import your local images
import DisasterImg from "../assets/disaster.jpg";
import EcommerceImg from "../assets/ecommercestore.jpg"
import ChatbotImg from "../assets/AIchatbot.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Event Management Software",
      description:
        " A Event Management to maintain events, registration, booking and payments",
      tech: ["React.js", "Tailwind CSS", "Django", "Firebase - authentication"],
      image: EcommerceImg,
      link: "#",
      github: "https://github.com/SAMSAMETH/EventManagement",
    },
    {
      title: "Medical AI Chat Assistant using RAG Agentic",
      description:
        "An AI-powered chatbot using LangChain and RAG Agents for smart query handling.",
      tech: ["LangChain", "Gen AI", "Python-flask","Pinecone-vectorDB"],
      image: ChatbotImg,
      link: "#",
      github: "https://github.com/SAMSAMETH/Build-a-Complete-Medical-Chatbot-with-LLMs-LangChain-Pinecone-Flask-AWS-",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x font-hero-font">
          My Projects
        </h1>
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light">
          Some of my key projects showcasing my skills in AI, Web Development, and Automation
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-violet-500/40 border border-gray-700"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 text-left">
                <h2 className="text-xl font-bold text-violet-400 group-hover:text-pink-400 transition duration-300">
                  {project.title}
                </h2>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg shadow-md hover:opacity-90 transition font-semibold"
                  >
                    🔗 View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-violet-500 rounded-lg text-violet-400 hover:bg-violet-500 hover:text-white transition font-semibold"
                  >
                     GitHub
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

export default Projects;
