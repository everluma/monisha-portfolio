import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

const educationData = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Honors in Mathematics",
    institution: "Carmichael College",
    year: "2025 - Present",
    description:
      "Currently studying Mathematics while continuing my web development learning journey.",
  },

  {
    icon: <FaRocket />,
    title: "Government Freelancing Course",
    institution: "Youth Development Training",
    year: "3 Months",
    description:
      "Completed a government-supported freelancing training program.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Programming Hero Web Development Course",
    institution: "Programming Hero",
    year: "Running",
    description:
      "Learning React, Next.js, Node.js, MongoDB, Tailwind CSS, and modern full stack development.",
  },

  {
    icon: <FaBookOpen />,
    title: "Basic Computer Learning",
    institution: "Computer Training Program",
    year: "Completed",
    description:
      "Learned Excel, Access, PowerPoint, internet browsing, and fundamental computer skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-black">

            Education &{" "}

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            My academic background and continuous learning journey
            in technology and web development.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Items */}
          <div className="space-y-14">

            {educationData.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative flex items-start gap-10"
              >

                {/* Timeline Icon */}
                <div className="relative z-10 min-w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg shadow-pink-500/30">

                  {item.icon}

                  {/* Pulse */}
                  <div className="absolute inset-0 rounded-2xl bg-pink-500 opacity-30 animate-ping"></div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-pink-500 transition duration-500"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition duration-500"></div>

                  {/* Year Badge */}
                  <div className="relative inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-5">
                    {item.year}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-2xl md:text-3xl font-bold mb-3">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <h4 className="relative text-lg text-pink-400 mb-5">
                    {item.institution}
                  </h4>

                  {/* Description */}
                  <p className="relative text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;