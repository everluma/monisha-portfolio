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
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6"
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
            My <span className="text-pink-500">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              {/* Category Title */}
              <h3 className="text-3xl font-bold mb-8 text-pink-400">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {category.skills.map((skill, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-lg hover:border-pink-500 hover:shadow-pink-500/30 hover:shadow-2xl transition duration-300"
                  >

                    {/* Icon */}
                    <div className="text-6xl text-pink-500 mb-5">
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <h4 className="text-xl font-semibold">
                      {skill.name}
                    </h4>
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