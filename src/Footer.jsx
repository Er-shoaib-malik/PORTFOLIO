
import React from "react";

const Footer = () => {
return(
      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-sm text-white/60">
    <p>© {new Date().getFullYear()} Shoaib Malik — Crafted with React, Tailwind & Framer Motion</p>
  </footer>
)
};

export default Footer