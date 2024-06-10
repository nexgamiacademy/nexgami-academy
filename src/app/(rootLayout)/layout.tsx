import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NexGami Academy',
	description: 'Nintendo doing Web3',
	icons: {
		icon: '/NexGamiLogo.png',
	},
};

export default function GeneralLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
