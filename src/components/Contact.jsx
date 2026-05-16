import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0b1120]"
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
            Contact <span className="text-pink-500">Me</span>
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg hover:border-pink-500 transition duration-300"
          >
            <div className="text-5xl text-pink-500 mb-5 flex justify-center">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              farjanaaktarmonisha@gmail.com
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg hover:border-pink-500 transition duration-300"
          >
            <div className="text-5xl text-pink-500 mb-5 flex justify-center">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Phone
            </h3>

            <p className="text-gray-400">
              01554797667
            </p>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg hover:border-pink-500 transition duration-300"
          >
            <div className="text-5xl text-pink-500 mb-5 flex justify-center">
              <FaWhatsapp />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              WhatsApp
            </h3>

            <p className="text-gray-400">
              01554797667
            </p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 text-3xl"
        >

          <a
            href="https://github.com/everluma"
            target="_blank"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/farjana-monisha"
            target="_blank"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Farjana_Monisha"
            target="_blank"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.facebook.com/farjanaaktar.monisha"
            target="_blank"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;