import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

const contactData = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "farjanaaktarmonisha@gmail.com",
    link: "mailto:farjanaaktarmonisha@gmail.com",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "01554797667",
    link: "tel:01554797667",
  },

  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "01554797667",
    link: "https://wa.me/8801554797667",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/everluma",
  },

  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/farjana-monisha",
  },

  {
    icon: <FaTwitter />,
    link: "https://x.com/Farjana_Monisha",
  },

  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/farjanaaktar.monisha",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden bg-[#0b1120]"
    >

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black">

            Let's{" "}

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project idea, collaboration, or just want to say hello?
            Feel free to contact me anytime.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contactData.map((item, index) => (

            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center hover:border-pink-500 transition duration-500"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-4xl shadow-2xl shadow-pink-500/30 group-hover:rotate-6 transition duration-500">

                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 break-all">
                  {item.value}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

            </motion.a>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl text-center relative overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10"></div>

          <div className="relative z-10">

            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-4xl shadow-2xl shadow-pink-500/30">

              <FaPaperPlane />
            </div>

            <h3 className="text-4xl font-black mt-8">
              Ready To Build Something Amazing?
            </h3>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on creative web projects,
              modern UI/UX ideas, and frontend experiences.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-10 flex-wrap">

              {socials.map((social, index) => (

                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg flex items-center justify-center text-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:border-pink-500 transition duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;