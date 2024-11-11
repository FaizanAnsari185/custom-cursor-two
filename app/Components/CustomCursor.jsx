"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          top: position.y,
          left: position.x,
          width: isHover ? "1rem" : "4rem",
          height: isHover ? "1rem" : "4rem",
          transition: "width 0.2s ease, height 0.2s ease, transform 0.2s ease",
        }}
        className={`fixed top-0 left-0 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference`}
      ></div>
      <h1
        onMouseEnter={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(true)}
        className="text-center text-9xl font-bold"
      >
        Hello World!
      </h1>
    </>
  );
};

export default CustomCursor;
