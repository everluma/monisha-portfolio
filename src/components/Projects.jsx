import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-pink-500">Projects</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-pink-500 transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-pink-500">
                  {project.name}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-full transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-pink-500 hover:bg-pink-500 px-5 py-2 rounded-full transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;