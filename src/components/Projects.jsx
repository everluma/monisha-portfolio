import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

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

            Featured{" "}

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my frontend,
            UI/UX, and full stack development journey.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-pink-500 transition duration-500"
            >

              {/* Glow Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-500"></div>

              {/* Project Number */}
              <div className="absolute top-5 right-5 z-20 text-5xl font-black text-white/10">
                0{index + 1}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Floating Buttons */}
                <div className="absolute bottom-5 left-5 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500">

                  <a
                    href={project.live}
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-white hover:scale-110 transition duration-300 shadow-lg shadow-pink-500/30"
                  >
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-7">

                {/* Project Name */}
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech, idx) => (

                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 backdrop-blur-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Button */}
                <div className="mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-2xl hover:shadow-pink-500/30 transition duration-300 font-semibold"
                  >
                    View Project

                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;