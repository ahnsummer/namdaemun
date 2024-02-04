/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
const customPlugins = plugin(({ addUtilities, addComponents, addVariant }) => {
  addUtilities({
    '.h-calculated-screen': {
      height: 'calc(var(--vh, 1vh) * 100)',
    },
    '.flex-center': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });

  addComponents({
    '.container': {
      width: '100%',
      maxWidth: '1024px',
      padding: '0 1rem',
      margin: '0 auto',
      '@media (min-width: 1024px)': {
        // padding: "0",
      },
    },
    '.narrow-container': {
      width: '100%',
      maxWidth: '800px',
      padding: '0 1rem',
      margin: '0 auto',
      '@media (min-width: 1024px)': {
        padding: '0 1rem',
      },
      '@media (min-width: 1441px)': {
        maxWidth: '1024px',
      },
    },
  });

  addVariant('under', '& > *');
});

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const plugins = [customPlugins];
