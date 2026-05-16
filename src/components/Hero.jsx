import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/monisha.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
>

  {/* Background Glow Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

     

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-pink-500 text-xl mb-3 font-semibold">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Farjana Aktar <br />
            <span className="text-pink-500">Monisha</span>
          </h1>

         <div className="text-2xl md:text-3xl text-gray-300 mt-6 font-semibold h-20">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "MERN Stack Learner",
      2000,
      "Future Full Stack Developer",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</div>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
            Passionate about building modern responsive websites using
            React, Next.js, Tailwind CSS, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="border border-pink-500 hover:bg-pink-500 px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="https://github.com/everluma"
              target="_blank"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/farjana-monisha"
              target="_blank"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/Farjana_Monisha"
              target="_blank"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
       <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -15, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="flex justify-center"
>
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-pink-500 blur-[120px] opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="Monisha"
              className="relative w-[320px] md:w-[400px] rounded-3xl border-4 border-pink-500 shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;