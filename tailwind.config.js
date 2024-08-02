/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkmode: "class",
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '840px',
      // => @media (min-width: 1024px) { ... }

      'xl': '960px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1080px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },

    fontFamily: {
      body: ["Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo","sans-serif"],
      title: ["Noto Sans JP", "sans-serif"],
      blogtitle: ["Montserrat Alternates", "sans-serif"],
    },


    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text"),
          active: withOpacity("--color-text-active"),
          activeHeader: withOpacity("--color-text-active-header"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          secondary: withOpacity("--color-fill-secondary"),
          card: withOpacity("--color-card"),
          modal: withOpacity("--color-modal"),
        },
      },
      textDecorationColor: {
        skin: {
          base: withOpacity("--color-border"),
          active: withOpacity("--color-text-active"),
          activeHeader: withOpacity("--color-text-active-header"),
        }
      },
      borderColor: {
        skin: {
          normal: withOpacity('--color-text'),
          base: withOpacity('--color-border'),
        },
      },
      colors: {
        custom: {
          title: '#555',
          subtitle: "#999",
          hover: "#e0a419",
          active: "#ff7f50",
          grey: "#f6f6f6",
          nav: "#ded6d8",
          primary: "#edede9",
          second: "#d6ccc2",
          third: "#f5ebe0",
          forth: "#e3d5ca",
          fifth: "#d5bdaf"
        },
        bland:{
          DEFAULT:"#D04F3E",
          theme:"#D04F3E",
          background:"#E64733",
          menu:"#A64538",
          heading1:"#E1442F",
          heading2:"#F58C7F",
          sidebertitle:"#F17363",
          sideberbackground:"#F7ACA1",
          sideberprofile:"#CD9187",
        }
      }
    },
  },
  plugins: [],
}

