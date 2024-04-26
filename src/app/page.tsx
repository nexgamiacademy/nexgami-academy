import Banner from '@/components/UI/Banner';
import { Button, Typography } from '@mui/material';
import rewardBanner from '@/Assets/rewardBanner.png';
import Card from '@/components/UI/Card';
import Image from 'next/image';
import DifficultyChip from '@/components/Shared/DifficultyChip';
import CoursesGrid from '@/components/CoursesGrid';
import { dummyCourses } from '@/utils/shared';

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
			{/* blob on background top right */}
			<div className="blob size-11 xl:size-[650px]"></div>

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

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-5 items-center justify-center w-full px-5 md:px-20 mt-14">
					{dummyCourses.map((course) => (
						<Card key={course.id} course={course} />
					))}
				</div>
				<div className="cursor-pointer underline font-semibold text-primary my-3 text-end col-span-12 mr-4 xl:mr-20">Show All Courses</div>

				<section className="flex flex-col gap-6 xl:flex-row justify-between mx-4 my-10 xl:mx-20 xl:my-20 bg-[#0C0E11] p-10 rounded-xl">
					<div className="xl:w-[760px] flex flex-col gap-6">
						<Typography variant="h5" fontWeight={700} lineHeight={1.25} className="text-3xl xl:text-5xl leading-snug">
							Earn Crypto Through Learning about <span className="text-primary">NexGami</span>
						</Typography>
						<Typography variant="h6" color={'lightgray'} lineHeight={1.65} className="text-sm xl:text-lg">
							Build your blockchain knowledge, complete quizzes, and earn free crypto.{' '}
						</Typography>
					</div>
					<Image src={rewardBanner} alt="earn exciting rewards" />
				</section>

				<section className="mx-4 xl:m-20">
					<div className="flex items-start gap-5">
						<p className="text-nowrap">Topics :</p>
						<div className="flex flex-wrap gap-3">
							{keywords.map((keyword) => (
								<Button variant="outlined" color="inherit" size="small" className="" key={keyword}>
									{keyword}
								</Button>
							))}
						</div>
					</div>

					<div className="flex items-start xl:items-center gap-5 mt-7">
						<p className="text-nowrap">Difficuly :</p>
						<div className="flex flex-wrap items-center gap-3">
							{['Beginner', 'Intermediate', 'Advanced'].map((difficulty: any) => (
								<DifficultyChip difficulty={difficulty} variant="contained" key={difficulty} />
							))}
						</div>
					</div>
				</section>

				<CoursesGrid />
			</section>
		</main>
	);
}
