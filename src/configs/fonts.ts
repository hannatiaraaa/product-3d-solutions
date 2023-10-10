import { Inter, Poppins, Sacramento } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const sacramento = Sacramento({ subsets: ['latin'], weight: '400' });

export { inter, poppins, sacramento };
