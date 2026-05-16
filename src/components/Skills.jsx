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

const skills = [
  {
    name: "HTML",
    level: "95%",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    level: "90%",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <FaJs />,
  },
  {
    name: "React",
    level: "85%",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    level: "75%",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    level: "70%",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    level: "65%",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    level: "75%",
    icon: <SiMongodb />,
  },
  {
    name: "Firebase",
    level: "80%",
    icon: <SiFirebase />,
  },
  {
    name: "GitHub",
    level: "85%",
    icon: <FaGithub />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-pink-500">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg hover:border-pink-500 transition duration-300"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-4">

                <div className="flex items-center gap-3">
                  <span className="text-3xl text-pink-500">
                    {skill.icon}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-pink-500 font-bold">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-pink-500 rounded-full"
                ></motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;