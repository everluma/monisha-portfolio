import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-2xl transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;