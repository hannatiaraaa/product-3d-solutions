import { EColor, EShopColor } from './src/configs/Color.enum';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /text-[a-z]/,
    },
    {
      pattern: /w-[0-9]/,
    },
    {
      pattern: /h-[0-9]/,
    },
    {
      pattern: /-top-[0-9]/,
    },
    {
      pattern: /-right-[0-9]/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: EColor.primary,
        'dark-container': EColor['dark-container'],
        'border-container': EColor['border-container'],
        'black-base': EColor['black-base'],
        'dark-gray': EColor['dark-gray'],
        'grey-suit': EColor['grey-suit'],
        'chat-base': EColor['chat-base'],
        shop: {
          primary: EShopColor.primary,
          'bg-trending': EShopColor['bg-trending'],
        },
      },
    },
  },
  plugins: [],
};
export default config;
