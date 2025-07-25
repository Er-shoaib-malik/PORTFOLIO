/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 25px 8px cyan',
      }
    }
  }
}

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // rest of config
};
