import Navbar from '@/components/Navbar';
import Banner from '@/components/UI/Banner';
import { Button, Typography } from '@mui/material';
import courseImage from '@/Assets/nexgami banner.png';
import courseImage2 from '@/Assets/course1.png';
import courseImage3 from '@/Assets/course3.png';
import courseImage4 from '@/Assets/course4.png';
import rewardBanner from '@/Assets/rewardBanner.png';
import logo from '@/Assets/NexgamiLogo.png';
import rocket from '@/Assets/rocket.png';
import Card from '@/components/UI/Card';
import Image from 'next/image';
import DifficultyChip from '@/components/Shared/DifficultyChip';
import DateNTime from '@/components/Shared/DateNTime';

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

const keywords = [
	'Altcoin',
	'bicoin',
	'NexGami',
	'Blockchain',
	'Community',
	'Consensus',
	'CryptoCureency',
	'Ethereum',
	'DeFi',
	'Crypto',
	'Essential',
	'History',
	'Metaverse',
	'Mining',
	'NFT',
	'Minting',
	'Security',
	'Privacy',
	'Personal Finance',
	'Utility',
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

				<section className="m-20">
					<div className="flex items-center gap-5">
						<Typography variant="h6" sx={{ width: '100px' }}>
							Topics :
						</Typography>
						<div className="flex flex-wrap gap-3">
							{keywords.map((keyword) => (
								<Button variant="outlined" color="inherit" size="small" className="" key={keyword}>
									{keyword}
								</Button>
							))}
						</div>
					</div>

					<div className="flex items-center gap-5 mt-7">
						<Typography variant="h6">Difficuly :</Typography>
						<div className="flex items-center gap-3">
							{['Beginner', 'Intermediate', 'Advanced'].map((difficulty: any) => (
								<DifficultyChip difficulty={difficulty} variant="contained" key={difficulty} />
							))}
						</div>
					</div>
				</section>

				<section className="relative m-20">
					{/* blob on background top right */}
					<div className="relative -mt-">
						<div className="blobCenter1"></div>
						<div className="blobCenter2"></div>
					</div>
					<div className="grid grid-cols-12 gap-10">
						<div className="flex rounded-lg overflow-hidden max-h-[350px] w-full col-span-8">
							<Image className="h-[350px] w-[350px] rounded-l-lg bg-black p-2" src={logo} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start pl-12 pr-8 rounded-r-lg w-full">
								<div className="flex flex-col gap-3">
									<Typography variant="h3" fontWeight={700}>
										What Are BRC-20 Tokens?
									</Typography>
									<DateNTime />
									<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
								</div>
							</div>
						</div>

						<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center px-10 rounded-lg col-span-4">
							<div className="flex flex-col gap-3">
								<Typography variant="h4" fontWeight={700}>
									What Are Bitcoin Layer 2 Networks
								</Typography>
								<DateNTime />
								<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
							</div>
						</div>
						<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center px-10 rounded-lg col-span-4">
							<div className="flex flex-col gap-3">
								<Typography variant="h4" fontWeight={700}>
									An Introduction to BNB Smart Chain (BSC)
								</Typography>
								<DateNTime />
								<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
							</div>
						</div>
						<div className="flex flex-row-reverse rounded-lg overflow-hidden max-h-[350px] w-full col-span-8">
							<Image className="h-[350px] w-[350px] rounded-r-lg bg-black" src={rocket} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start pl-12 pr-8 rounded-l-lg w-full">
								<div className="flex flex-col gap-3">
									<Typography variant="h4" fontWeight={700}>
										Your Guide to NexGami Launchpad and Launchpool
									</Typography>
									<DateNTime />
									<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}
