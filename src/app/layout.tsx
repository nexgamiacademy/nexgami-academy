import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@/contexts/UserContext';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import MUIThemeProvider from '@/components/MUIThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NexGami Academy',
	description: 'Nintendo doing Web3',
	icons: {
		icon: '/nexg_academy_banner.jpg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<UserProvider>
				<MUIThemeProvider>
					<body className={inter.className} style={{ minHeight: '100vh', position: 'relative' }}>
						<Navbar />
						{children}
						<Toaster />
						<Footer />
					</body>
				</MUIThemeProvider>
			</UserProvider>
		</html>
	);
}
