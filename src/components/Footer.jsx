import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] py-14">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Main */}
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <h2 className="text-4xl md:text-5xl font-black">

            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Farjana Aktar Monisha
            </span>
          </h2>

          {/* Role */}
          <p className="text-gray-400 mt-4 text-lg">
            Frontend Developer • MERN Stack Learner
          </p>

          {/* Description */}
          <p className="text-gray-500 mt-5 max-w-2xl leading-relaxed">
            Passionate about building modern, responsive,
            and visually engaging web experiences with creativity and clean UI.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400">

            {[
              "Home",
              "About",
              "Skills",
              "Education",
              "Projects",
              "Contact",
            ].map((item, index) => (

              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-500 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">

            {[
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
            ].map((social, index) => (

              <a
                key={index}
                href={social.link}
                target="_blank"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-10"></div>

          {/* Bottom */}
          <p className="text-gray-500 text-sm flex items-center gap-2">

            Made with{" "}

            <span className="text-pink-500 animate-pulse">
              <FaHeart />
            </span>

            by Farjana Aktar Monisha
          </p>

          <p className="text-gray-600 text-xs mt-3">
            © 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;