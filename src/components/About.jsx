import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section  id="about" className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-12 py-20 font-body-font">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={AboutImg} 
            alt="About" 
            className="w-72 md:w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent font-hero-font">
            About Me
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-transparent bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text">Samuel K</span>,  
            a passionate <span className="font-semibold text-transparent bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text">Gen AI Engineer</span> /  
            <span className="font-semibold text-transparent bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text"> Fullstack Developer</span> (Fresher) skilled in  
            React.js, Python-Django, Tailwind CSS, and MySQL.
          </p>

          {/* Secondary Info */}
          <p className="mt-4 text-gray-400 leading-relaxed">
            I enjoy building responsive, user-friendly applications and continuously learning new 
            technologies to create impactful solutions. Beyond coding, I love exploring ideas, 
            collaborating with teams, and growing in this ever-changing tech world. 🚀
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl font-medium text-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
