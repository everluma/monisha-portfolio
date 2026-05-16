import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Honors in Mathematics",
    institution: "Carmichael College",
    year: "2025 - Present",
    description:
      "Currently studying Mathematics while continuing my web development learning journey.",
  },

  {
    title: "Government Freelancing Course",
    institution: "Youth Development Training",
    year: "3 Months",
    description:
      "Completed a government-supported freelancing training program.",
  },

  {
    title: "Programming Hero Web Development Course",
    institution: "Programming Hero",
    year: "Running",
    description:
      "Learning modern web technologies including React, Node.js, MongoDB, and Next.js.",
  },

  {
    title: "Basic Computer Learning",
    institution: "Computer Training Program",
    year: "Completed",
    description:
      "Learned Excel, Access, PowerPoint, internet browsing, and basic computer skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-[#0b1120]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Education & <span className="text-pink-500">Learning</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-pink-500 ml-4">

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >

              {/* Dot */}
              <div className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[11px] mt-2"></div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:border-pink-500 transition duration-300">

                <h3 className="text-2xl font-bold text-pink-500">
                  {item.title}
                </h3>

                <h4 className="text-lg text-gray-300 mt-2">
                  {item.institution}
                </h4>

                <p className="text-sm text-pink-400 mt-1">
                  {item.year}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;