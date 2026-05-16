import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0b1120]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-pink-500">Me</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl"
        >

          <p className="text-gray-300 leading-relaxed text-lg">
            I am <span className="text-pink-500 font-semibold">Farjana Aktar Monisha</span>,
            a passionate web development learner and Mathematics student at
            Carmichael College.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I started my programming journey with basic computer learning,
            where I learned Excel, Access, PowerPoint, and internet browsing.
            Later, I became deeply interested in web development and started
            learning modern technologies like React, Next.js, MongoDB,
            Node.js, and Tailwind CSS.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I completed a 3-month freelancing course through government youth
            development training and currently continue my learning journey
            with Programming Hero.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I enjoy building beautiful responsive websites and exploring
            modern UI/UX designs. I have already completed around 10 projects
            with excellent feedback during my learning journey.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            Beyond programming, I love reading detective stories, thriller
            novels, science fiction, and travel literature. I believe
            continuous learning and curiosity are the keys to becoming a
            successful developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;