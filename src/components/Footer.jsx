import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-12">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Content */}
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <h2 className="text-4xl font-bold">
            Farjana Aktar{" "}
            <span className="text-pink-500">
              Monisha
            </span>
          </h2>

          {/* Role */}
          <p className="text-gray-400 mt-4 text-lg">
            Frontend Developer • MERN Stack Learner
          </p>

          {/* Small Description */}
          <p className="text-gray-500 mt-5 max-w-2xl leading-relaxed">
            Passionate about building beautiful, modern, and responsive
            web experiences with creativity, clean design, and continuous learning.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/everluma"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/farjana-monisha"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/Farjana_Monisha"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.facebook.com/farjanaaktar.monisha"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-10"></div>

          {/* Bottom */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-pink-500" /> by Farjana Aktar Monisha
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