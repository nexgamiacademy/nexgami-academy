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

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-5 items-center justify-center w-full px-5 md:px-20 mt-14">
					{dummyCourses.map((course) => (
						<Card key={course.id} course={course} />
					))}
				</div>
				<div className="cursor-pointer underline font-semibold text-primary my-3 text-end col-span-12 mr-20">Show All Courses</div>

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

				<CoursesGrid />
			</section>
		</main>
	);
}
