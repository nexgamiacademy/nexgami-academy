import RequireAdmin from '@/components/Auth/RequireAdmin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'NexGami Academy',
	description: 'Nintendo doing Web3',
	icons: {
		icon: '/NexGamiLogo.png',
	},
};

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<RequireAdmin>{children}</RequireAdmin>
		</div>
	);
}
