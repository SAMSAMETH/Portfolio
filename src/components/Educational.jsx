import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      level: "College (UG)",
      institution:
        "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
      course: "B.Tech in Computer Science and Business Systems",
      year: "2021 – 2025",
      location: "Avadi, Thiruvallur District, Tamilnadu",
      marks: "8.14 CGPA",
      icon: <FaUniversity className="text-violet-400 text-3xl" />,
    },
    {
      level: "Higher Secondary (12th)",
      institution: "Pole Star Matric Higher Secondary School",
      course: "Maths – Computer Science",
      year: "2020 – 2021",
      marks: "89%",
      icon: <FaGraduationCap className="text-pink-400 text-3xl" />,
    },
    {
      level: "Secondary School (10th)",
      institution: "Pole Star Matric Higher Secondary School",
      course: "General Studies",
      year: "2018 – 2019",
      marks: "86%",
      icon: <FaSchool className="text-orange-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="px-6 md:px-12 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-6xl font-hero-font tracking-wide mb-12 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
          🎓 Education
        </h1>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-8 text-left 
              hover:scale-105 hover:shadow-violet-500/40 hover:border-violet-500 transition-all duration-500"
            >
              {/* Top Icon */}
              <div className="flex items-center gap-3 mb-4">
                {edu.icon}
                <h2 className="text-2xl md:text-3xl font-bold text-violet-300 group-hover:text-pink-400 transition-colors">
                  {edu.level}
                </h2>
              </div>

              {/* Institution */}
              <h3 className="text-lg md:text-xl font-semibold text-pink-400 mb-2">
                {edu.institution}
              </h3>

              {/* Course + Year */}
              <p className="text-gray-300 italic text-md">{edu.course}</p>
              <p className="text-sm text-gray-400 mb-4">{edu.year}</p>

              {/* Marks */}
              <p className="text-lg font-medium text-gray-200">
                <span className="text-orange-400 font-semibold">Result: </span>
                {edu.marks}
              </p>

              {/* Glow Accent Line */}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
