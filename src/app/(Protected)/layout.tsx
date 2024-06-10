import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import RequireAuth from '@/components/Auth/RequireAuth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NexGami Academy',
	description: 'Nintendo doing Web3',
	icons: {
		icon: '/NexGamiLogo.png',
	},
};

export default function ProtectedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <RequireAuth>{children}</RequireAuth>;
}
