import { motion } from "framer-motion";

import {
  FaCode,
  FaBookOpen,
  FaLaptopCode,
  FaRocket,
  FaBrain,
  FaPalette,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "10+ Projects",
    desc: "Built responsive and creative web projects during my learning journey.",
  },

  {
    icon: <FaCode />,
    title: "MERN Stack Learner",
    desc: "Currently exploring React, Node.js, MongoDB, Express, and Next.js.",
  },

  {
    icon: <FaBookOpen />,
    title: "Book Lover",
    desc: "Love detective stories, thrillers, science fiction, and travel literature.",
  },

  {
    icon: <FaRocket />,
    title: "Future Goal",
    desc: "Dreaming of becoming a professional full stack developer.",
  },

  {
    icon: <FaBrain />,
    title: "Problem Solver",
    desc: "Mathematics background helps me think logically and analytically.",
  },

  {
    icon: <FaPalette />,
    title: "UI Enthusiast",
    desc: "Passionate about premium UI design and smooth user experiences.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black">

            About{" "}

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT STORY */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Glass Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl relative overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 blur-[100px] rounded-full"></div>

              {/* Quote */}
              <div className="mb-8">

                <span className="text-pink-500 text-6xl font-black">
                  "
                </span>

                <h3 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                  Building modern web experiences with creativity,
                  curiosity, and passion.
                </h3>
              </div>

              {/* Story */}
              <div className="space-y-6 text-lg leading-relaxed">

                <p className="text-gray-300">
                  Hi! I'm{" "}
                  <span className="text-pink-500 font-semibold">
                    Farjana Aktar Monisha
                  </span>
                  , a passionate frontend developer and Mathematics student at
                  Carmichael College.
                </p>

                <p className="text-gray-400">
                  My programming journey started from basic computer learning —
                  Excel, PowerPoint, Access, and internet browsing —
                  before I discovered my passion for web development.
                </p>

                <p className="text-gray-400">
                  Now I spend most of my time learning and building modern web
                  applications using React, Next.js, Tailwind CSS,
                  MongoDB, and Node.js.
                </p>

                <p className="text-gray-400">
                  I enjoy creating beautiful UI designs, smooth user experiences,
                  and interactive websites that feel modern and alive.
                </p>

                <p className="text-gray-400">
                  Outside programming, I love reading detective stories,
                  thrillers, science fiction, and travel literature.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {cards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 overflow-hidden hover:border-pink-500 transition duration-500"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition duration-500"></div>

                {/* Icon */}
                <div className="relative text-5xl text-pink-500 mb-6">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                {/* Desc */}
                <p className="relative text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;