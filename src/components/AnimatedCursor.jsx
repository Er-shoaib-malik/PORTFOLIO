import { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Ring follows dot with delay
  useEffect(() => {
    const follow = setInterval(() => {
      setRingPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    }, 10);
    return () => clearInterval(follow);
  }, [mousePosition]);

  return (
    <>
      {/* Dot */}
      <div
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          width: 8,
          height: 8,
          backgroundColor: "white",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Ring */}
      <div
        style={{
          position: "fixed",
          top: ringPosition.y,
          left: ringPosition.x,
          width: 32,
          height: 32,
          border: "2px solid white",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
