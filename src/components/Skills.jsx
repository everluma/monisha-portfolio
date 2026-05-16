import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-black">

            My{" "}

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern,
            responsive, and interactive web applications.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Category Title */}
              <div className="flex items-center gap-4 mb-10">

                <div className="w-3 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>

                <h3 className="text-3xl md:text-4xl font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Skill Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

                {category.skills.map((skill, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.04,
                    }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-pink-500 transition duration-500"
                  >

                    {/* Glow Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-500"></div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.15,
                      }}
                      className="relative text-6xl text-pink-500 mb-6 flex justify-center"
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <h4 className="relative text-xl font-semibold">
                      {skill.name}
                    </h4>

                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;