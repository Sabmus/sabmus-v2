import { Montserrat, Roboto_Mono, Lora, Source_Code_Pro } from 'next/font/google';

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
});
