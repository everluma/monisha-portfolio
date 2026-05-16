import { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Link } from "react-scroll";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrollingUp, setScrollingUp] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  // Scroll Hide/Show Navbar
  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      setScrollingUp(
        currentScrollY < lastScrollY || currentScrollY < 50
      );

      lastScrollY = currentScrollY;

      // Progress Bar
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / scrollHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <AnimatePresence>

      {scrollingUp && (

        <motion.header
          initial={{ y: -120 }}
          animate={{ y: 0 }}
          exit={{ y: -120 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-5"
        >

          {/* Scroll Progress */}
          <div
            className="absolute top-0 left-0 h-[3px] bg-pink-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>

          {/* Navbar */}
          <nav className="max-w-7xl mx-auto">

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

              {/* Glow Effects */}
              <div className="absolute -top-10 left-10 w-40 h-40 bg-pink-500/20 blur-[100px] rounded-full"></div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-[100px] rounded-full"></div>

              {/* Content */}
              <div className="relative flex items-center justify-between px-6 py-5">

                {/* Logo */}
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-extrabold tracking-wide"
                >
                  <span className="text-white">
                    Ever
                  </span>

                  <span className="text-pink-500">
                    Luma
                  </span>
                </motion.a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-3">

                  {navLinks.map((link, index) => (

                    <motion.li
                      key={index}
                      whileHover={{ y: -2 }}
                    >

                      <Link
                        to={link}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-100}
                        activeClass="active-nav"
                        className="relative cursor-pointer px-5 py-2 rounded-full text-gray-300 hover:text-white transition duration-300 group"
                      >

                        {/* Hover Glow */}
                        <span className="absolute inset-0 rounded-full bg-pink-500/10 scale-0 group-hover:scale-100 transition duration-300"></span>

                        {/* Underline */}
                        <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></span>

                        {/* Text */}
                        <span className="relative z-10 capitalize">
                          {link}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Button */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden text-2xl text-pink-500 cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>

                {menuOpen && (

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-t border-white/10 bg-[#0b1120]/90 backdrop-blur-xl"
                  >

                    <ul className="flex flex-col gap-3 p-6">

                      {navLinks.map((link, index) => (

                        <Link
                          key={index}
                          to={link}
                          smooth={true}
                          duration={500}
                          offset={-100}
                          onClick={() => setMenuOpen(false)}
                          className="capitalize cursor-pointer text-gray-300 hover:text-pink-500 hover:bg-white/5 rounded-xl px-4 py-3 transition duration-300"
                        >
                          {link}
                        </Link>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;