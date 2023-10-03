module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BodyColor: '#FAFAFA',
        Primary: '#073B74',
        Textgray: '#858C8E',

        Secondary: '#404CDC',
        darkblack: "#343A40",
        darkred: "#FF0000",
        green:"#159800",
      },
      maxWidth: {
        max: '1440px',
      },
    },
    backgroundImage: {
      Forgotpass: "url('Images/forgotpas.png')",
    },
    fontFamily: {
      heading: ['"Heading"', 'Montserrat-Bold'],
      subheading: ['"Subheading"', 'Montserrat-Medium'],
      content: ['"Content"', 'Montserrat-Regular'],
    },
    theme: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '2xxl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
