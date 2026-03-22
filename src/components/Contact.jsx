import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3lfi6b",      // ✅ Your Service ID
        "template_o8new4r",    // ✅ Your Template ID
        form.current,
        "p8Zjd2LHoDeNOX-VE"    // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset(); // clear the form
        },
        (error) => {
          alert("❌ Failed to send message. Try again!");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 md:px-12 py-16 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details + Resume */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-violet-400">Get in Touch</h2>
            <p className="text-gray-300">
              Feel free to reach out to me through the following details or send me a direct message using the form.
            </p>

            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <AiOutlineMail className="text-pink-500 text-2xl" />
                <span>18samuelstephen@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <AiOutlinePhone className="text-pink-500 text-2xl" />
                <span>+91 7338745684</span>
              </p>
              <p className="flex items-center space-x-3">
                <AiOutlineEnvironment className="text-pink-500 text-2xl" />
                <span>Medavakkam,Chennai </span>
              </p>
            </div>

            {/* Resume Section */}
            <div className="mt-6 flex space-x-4">
              <a
                href="/SamuelK_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg shadow-md hover:opacity-90 transition font-semibold"
              >
                <FaFilePdf className="mr-2" /> View Resume
              </a>
              <a
                href="/SamuelK_resume.pdf"
                download="SamuelK_resume.pdf"
                className="flex items-center px-5 py-2 border border-violet-500 rounded-lg text-violet-400 hover:bg-violet-500 hover:text-white transition font-semibold"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-violet-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg shadow-md hover:opacity-90 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


//service id : service_388lbgd
//template_b8unh2r
//p8Zjd2LHoDeNOX-VE