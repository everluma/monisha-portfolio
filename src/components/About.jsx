import { motion } from "framer-motion";

import {
  FaCode,
  FaBookOpen,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0b1120]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-pink-500">Me</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg shadow-2xl"
        >

          {/* Intro */}
          <div className="space-y-6">

            <h3 className="text-3xl font-bold leading-snug">
              Hi, I'm{" "}
              <span className="text-pink-500">
                Farjana Aktar Monisha
              </span>{" "}
              👋
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate frontend web developer and a Mathematics student
              at Carmichael College who loves building modern, responsive,
              and visually appealing websites.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My journey started with basic computer learning — Excel,
              PowerPoint, Access, internet browsing — and gradually I fell in
              love with programming and web development.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Currently, I'm learning React, Next.js, MongoDB, Node.js,
              Tailwind CSS, and exploring the MERN stack deeply through
              Programming Hero.
            </p>

          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500 transition duration-300"
            >
              <div className="text-5xl text-pink-500 flex justify-center mb-4">
                <FaLaptopCode />
              </div>

              <h4 className="text-xl font-bold mb-3">
                10+ Projects
              </h4>

              <p className="text-gray-400 text-sm">
                Built modern responsive projects during my learning journey.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500 transition duration-300"
            >
              <div className="text-5xl text-pink-500 flex justify-center mb-4">
                <FaCode />
              </div>

              <h4 className="text-xl font-bold mb-3">
                MERN Learner
              </h4>

              <p className="text-gray-400 text-sm">
                Continuously learning modern web technologies and backend development.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500 transition duration-300"
            >
              <div className="text-5xl text-pink-500 flex justify-center mb-4">
                <FaBookOpen />
              </div>

              <h4 className="text-xl font-bold mb-3">
                Book Lover
              </h4>

              <p className="text-gray-400 text-sm">
                Enjoy detective stories, thrillers, science fiction, and travel literature.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500 transition duration-300"
            >
              <div className="text-5xl text-pink-500 flex justify-center mb-4">
                <FaRocket />
              </div>

              <h4 className="text-xl font-bold mb-3">
                Future Goal
              </h4>

              <p className="text-gray-400 text-sm">
                To become a skilled full stack developer and build impactful products.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;