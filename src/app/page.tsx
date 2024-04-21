/* eslint-disable react/no-unescaped-entities */
import CustomButton from '@/components/CustomButton';
import Navbar from '@/components/Navbar';
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import banner from '@/Assets/nexgami banner.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Dot from '@mui/icons-material/FiberManualRecord';

export default function Home() {
	return (
		<main className="text-white relative overflow-hidden">
			<Navbar />

			{/* blob on background top right */}
			<div className="blob"></div>

			{/* banner */}
			<section className="flex items-center justify-between py-16 px-20 w-full">
				<div className="w-[35rem]">
					<Typography variant="body1">Learn All About</Typography>
					<Typography variant="h2">The Next Generation</Typography>
					<Typography variant="h2">
						of <span className="font-semibold text-primary">Gaming</span>
					</Typography>
					<Divider sx={{ borderColor: 'white', width: '4rem' }} />
					<Typography variant="body1" sx={{ margin: '1rem 0' }}>
						Your one-stop guide to all things crypto. Whether you're a rookie trying to understand mining or a veteran looking to develop a trading strategy, we've got you covered.
					</Typography>
					<CustomButton variant="contained">Start Here</CustomButton>
				</div>

				<div>
					<Image src={banner} alt="Nexgami Banner" />
					<div className="flex flex-col gap-4">
						<p>How to Read the Most Popular Crypto Candlestick Patterns</p>
						<div className="flex gap-10 text-gray-400">
							<p>Dec 12, 2023</p>
							<p className="flex gap-1">
								<AccessTimeIcon />
								<p>12 min</p>
							</p>
						</div>
						<div className="flex items-center gap-2 bg-[#D5EADD] px-3 py-2 rounded-md text-black w-fit">
							<Dot htmlColor="#7AC997" sx={{ width: '16px' }} />
							<Typography variant="body2">Beginner</Typography>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
