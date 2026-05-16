import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 blur-[120px] opacity-20"
      style={{
        background:
          "linear-gradient(to right, #ec4899, #8b5cf6)",
        transform: `translate(${position.x - 180}px, ${
          position.y - 180
        }px)`,
        transition: "transform 0.15s linear",
      }}
    ></div>
  );
};

export default CursorGlow;