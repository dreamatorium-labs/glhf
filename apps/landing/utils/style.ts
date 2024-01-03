import { Bangers, Montserrat, Russo_One } from 'next/font/google';

export const bangers = Bangers({ weight: '400', subsets: ['latin'] });
export const russo = Russo_One({ weight: '400', subsets: ['latin'] });
export const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });
export const montserratLight = Montserrat({
	weight: '300',
	subsets: ['latin'],
});

export const colors = {
	primary: '#75FB4C',
};
