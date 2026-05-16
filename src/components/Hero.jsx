import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../assets/monisha.jpeg";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-white/5 backdrop-blur-lg mb-6"
          >
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>

            <span className="text-sm text-gray-300">
              Available For Opportunities
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-pink-500 text-xl mb-3 font-semibold">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            <span className="text-white">
              Farjana Aktar
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Monisha
            </span>
          </h1>

          {/* Type Animation */}
          <div className="text-2xl md:text-3xl mt-8 font-bold h-20">

            <span className="text-gray-300">
              I'm a{" "}
            </span>

            <span className="text-pink-500">

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
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mt-6 leading-relaxed max-w-xl text-lg">
            Passionate about building modern responsive websites
            with React, Next.js, Tailwind CSS, MongoDB, and
            beautiful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-pink-500/40 hover:shadow-2xl px-7 py-4 rounded-full font-semibold transition duration-300"
            >
              <FaDownload />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-pink-500/30 bg-white/5 backdrop-blur-lg hover:bg-pink-500 px-7 py-4 rounded-full font-semibold transition duration-300"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-10">

            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/everluma",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/farjana-monisha",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/Farjana_Monisha",
              },
            ].map((social, index) => (

              <motion.a
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href={social.link}
                target="_blank"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-2xl text-gray-300 hover:text-pink-500 hover:border-pink-500 transition duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap gap-6 mt-12">

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl">
              <h3 className="text-3xl font-bold text-pink-500">
                10+
              </h3>

              <p className="text-gray-400 text-sm">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl">
              <h3 className="text-3xl font-bold text-pink-500">
                2025
              </h3>

              <p className="text-gray-400 text-sm">
                Learning Journey
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Rotating Border */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 blur-xl opacity-60 animate-spin-slow"></div>

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-[40px] overflow-hidden">

              <img
                src={profile}
                alt="Monisha"
                className="w-[320px] md:w-[420px] rounded-[30px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[30px]"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pink-500 text-2xl"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;