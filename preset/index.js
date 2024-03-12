const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@mavvy/m3-ui/dist/*.tsx',
    './node_modules/@mavvy/m3-ui/dist/*.js',
  ],
  // content: ['./node_modules/@mavvy/gerber/src/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        'linear-1': {
          '0%': {
            left: '-100%',
            width: '10%',
          },
          '50%': {
            width: '100%',
          },
          '70%': {
            left: '100%',
            width: '0%',
          },
          '100%': {
            width: '0%',
          },
        },
        'linear-2': {
          '0%': {
            left: '-200%',
            width: '10%',
          },
          '30%': {
            width: '100%',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            left: '100%',
            width: '10%',
          },
        },
        'stroke-dash': {
          '0%': {
            'stroke-dasharray': '1,200',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '89,200',
            'stroke-dashoffset': '-35',
          },
          '100%': {
            'stroke-dasharray': '89,200',
            'stroke-dashoffset': '-124',
          },
        },

        'fade-in-top': {
          '0%': {
            opacity: 0.75,
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: 0.75,
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0.75,
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'fade-out-right': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(30px)',
          },
        },
        dropdown: {
          '0%': {
            opacity: 0.75,
            transform: 'scaleY(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'scaleY(1)',
          },
        }, //dropdown
        'dropdown-reverse': {
          '0%': {
            opacity: 1,
            transform: 'scaleY(1)',
          },
          '100%': {
            opacity: 0,
            transform: 'scaleY(0)',
          },
        }, //dropdown
      },
      animation: {
        'linear-1': 'linear-1 2s ease-out infinite',
        'linear-2': 'linear-2 2s ease-in infinite',
        'stroke-dash': 'stroke-dash 1.5s ease-in-out infinite',
        dropdown:
          'dropdown 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0) 0.1s forwards',
        'fade-in-top': 'fade-in-top 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'fade-in-right': 'fade-in-right 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'fade-in-left': 'fade-in-left 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'fade-out-right':
          'fade-out-right 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0) forwards',
        'dropdown-reverse':
          'dropdown-reverse 0.3s cubic-bezier(0.2, 0.0, 0, 1.0) forwards',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--color-on-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--color-on-tertiary) / <alpha-value>)',
        'surface-container-lowest':
          'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
        'surface-container-low':
          'rgb(var(--color-surface-container-low) / <alpha-value>)',
        'surface-container':
          'rgb(var(--color-surface-container) / <alpha-value>)',
        'surface-container-high':
          'rgb(var(--color-surface-container-high) / <alpha-value>)',
        'surface-container-highest':
          'rgb(var(--color-surface-container-highest) / <alpha-value>)',
        'on-surface-container-highest':
          'rgb(var(--color-on-surface-container-highest) / <alpha-value>)',

        'surface-bright': 'rgb(var(--color-surface-bright) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-surface-variant':
          'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        outline: 'rgb(var(--color-outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        'on-error': 'rgb(var(--color-on-error) / <alpha-value>)',
        'error-container': 'rgb(var(--color-error-container) / <alpha-value>)',
        'on-error-container':
          'rgb(var(--color-on-error-container) / <alpha-value>)',
        scrim: 'rgb(var(--color-scrim) / <alpha-value>)',
        shadow: 'rgb(var(--color-shadow) / <alpha-value>)',
        'inverse-surface': 'rgb(var(--color-inverse-surface) / <alpha-value>)',
        'on-inverse-surface':
          'rgb(var(--color-on-inverse-surface) / <alpha-value>)',
      },
      opacity: {
        '08': '.08',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        ':root': {
          '--color-primary': '77 152 41',
          '--color-primary-light': '147 216 114',
          '--color-primary-dark': '55 106 30',
          '--color-on-primary': '255 255 255',
          '--color-primary-container': '183 243 151',
          '--color-on-primary-container': '7 33 0',
          '--color-secondary': '85 99 76',
          '--color-secondary-light': '140 158 128',
          '--color-on-secondary': '255 255 255',
          '--color-secondary-container': '217 232 202',
          '--color-on-secondary-container': '19 32 13',
          '--color-tertiary': '56 102 102',
          '--color-on-tertiary': '255 255 255',
          '--color-tertiary-container': '188 235 236',
          '--color-on-tertiary-container': '0 32 32',
          '--color-surface-container-low': '242 245 235',
          '--color-surface-container-lowest': '255 255 255',
          '--color-surface-container': '236 239 229',
          '--color-surface-container-high': '230 233 223',
          '--color-surface-container-highest': '224 227 218',
          '--color-on-surface-container-highest': '255 255 255',
          '--color-surface-bright': '254 247 255',
          '--color-surface-dim': '222 216 225',
          '--color-on-surface': '25 28 24',
          '--color-on-surface-variant': '67 72 62',
          '--color-outline': '116 121 109',
          '--color-outline-variant': '195 200 187',
          '--color-error': '186 27 26',
          '--color-on-error': '255 255 255',
          '--color-error-container': '255 218 214',
          '--color-on-error-container': '65 0 2',
          '--color-scrim': '31 31 31',
          '--color-shadow': '0 0 0',
          '--color-inverse-surface': '49 48 51',
          '--color-on-inverse-surface': '244 239 244',
        },
        '.m3-symbols-outlined': {
          'font-family': 'Material Symbols Outlined !important',
        },
        '.m3-symbols-rounded': {
          'font-family': 'Material Symbols Rounded !important',
        },
        '.m3-symbols-sharp': {
          'font-family': 'Material Symbols Sharp !important',
        },
        '.m3-symbols': {
          'font-variation-settings':
            '"FILL" var(--icon-fill, 0), "wght" var(--icon-wght, 400), "GRAD" 0, "opsz" 48',
          'font-family': 'var(--icon-font-family)',
          'letter-spacing': 'normal',
          'text-transform': 'none',
          display: 'inline-block',
          'white-space': 'nowrap',
          'word-wrap': 'normal',
          direction: 'ltr',
          '-webkit-font-feature-settings': 'liga',
          '-webkit-font-smoothing': 'antialiased',
        },
      });

      addComponents({
        '.btn': {
          padding: 1,
        },
      });

      // prettier-ignore
      addUtilities({
        '.z-999': {
          'z-index': 999,
        },
        '.z-100': {
          'z-index': 100,
        },
        '.rounded-4xl': {
          'border-radius': '1.75rem',
        },
        '.min-w-100': {
          'min-width': '100px',
        },
        '.text-2xs': {
          'font-size': '0.7rem',
          'line-height': '1rem',
        },
        '.m3-textfield.focused legend, .m3-textfield.has-value legend, .m3-textfield.has-prefix legend': {
          width: 'auto',
        },
        '.m3-icon-filled': {
          '--icon-fill': '1'
        },
        '.m3-fixed-h-center': {
          left: 'calc(100vw / 2)',
          transform: 'translateX(-50%)'
        }, 
        '.m3-circular-progress.indeterminate .path': {
          'stroke-dasharray': '1,200',
          'stroke-dashoffset': '0',
        },
      });
    }),
  ],
};
