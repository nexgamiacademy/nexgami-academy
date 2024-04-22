import Navbar from '@/components/Navbar';
import Banner from '@/components/UI/Banner';
import { Button, Typography } from '@mui/material';
import courseImage from '@/Assets/nexgami banner.png';
import courseImage2 from '@/Assets/course1.png';
import courseImage3 from '@/Assets/course3.png';
import courseImage4 from '@/Assets/course4.png';
import rewardBanner from '@/Assets/rewardBanner.png';
import Card from '@/components/UI/Card';
import Image from 'next/image';

const courseCards = [
	{
		id: 1,
		title: 'What is NexGami?',
		description: 'NexGami Course 1 Description',
		image: courseImage,
		difficulty: 'Beginner',
		date: 'Dec 12, 2023',
	},
	{
		id: 2,
		title: 'What is Bitcoin ?',
		description: 'NexGami Course 1 Description',
		image: courseImage2,
		difficulty: 'Beginner',
		date: 'Dec 12, 2023',
	},
	{
		id: 3,
		title: 'What is Web3 ?',
		description: 'NexGami Course 1 Description',
		image: courseImage3,
		difficulty: 'Beginner',
		date: 'Dec 12, 2023',
	},
	{
		id: 4,
		title: 'What is Polkadot ?',
		description: 'NexGami Course 1 Description',
		image: courseImage4,
		difficulty: 'Beginner',
		date: 'Dec 12, 2023',
	},
];

export default function Home() {
	return (
		<main className="text-white relative overflow-hidden">
			<Navbar />

			{/* blob on background top right */}
			<div className="blob"></div>

			<Banner />

			{/* latest Relase */}
			<section className="mt-20 py-10 relative">
				<Typography variant="h4" fontWeight={700} align="center">
					Latest Releases
				</Typography>

				{/* blob on background top right */}
				<div className="relative -mt-">
					<div className="blobCenter1"></div>
					<div className="blobCenter2"></div>
				</div>

				<div className="grid grid-cols-4 items-center justify-center w-full px-20 mt-14">
					{courseCards.map((course) => (
						<Card key={course.id} course={course} />
					))}
					<div className="cursor-pointer underline font-semibold text-primary my-3 text-end col-span-12">Show All Courses</div>
				</div>

				<section className="flex justify-between mx-20 my-20 bg-[#0C0E11] p-10 rounded-xl">
					<div className="w-[760px] flex flex-col gap-5">
						<Typography variant="h3" fontWeight={700} lineHeight={1.25}>
							Earn Crypto Through Learning about <span className="text-primary">NexGami</span>
						</Typography>
						<Typography variant="h6" color={'lightgray'} lineHeight={1.65}>
							Build your blockchain knowledge, complete quizzes, and earn free crypto.{' '}
						</Typography>
					</div>
					<Image src={rewardBanner} alt="earn exciting rewards" />
				</section>
			</section>
		</main>
	);
}
