import CustomButton from '@/components/CustomButton';
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import banner from '@/Assets/nexgami banner.png';
import logo from '@/Assets/NexgamiLogo.png';
import PrimaryButton from '@/components/UI/PrimaryButton';
import DateNTime from '@/components/Shared/DateNTime';
import DifficultyChip from '@/components/Shared/DifficultyChip';
import { dummyCourses } from '@/utils/shared';

const CoursesPage = () => {
	return (
		<div>
			<section className="flex items-center justify-around py-16 px-20 w-full">
				<div className="w-[45rem]">
					<Typography variant="h2">Earn Crypto By Learning </Typography>
					<Typography variant="h2">
						about <span className="font-semibold text-primary"> NexGami</span>
					</Typography>
					<Divider sx={{ borderColor: 'white', width: '4rem' }} />
					<Typography variant="body1" sx={{ margin: '1rem 0' }}>
						Get to know about NexGami, the next generation of web3 gaming. Complete short courses, crack quizes and earn exciting rewards!
					</Typography>
					<PrimaryButton>Get Started</PrimaryButton>
				</div>

				<div>
					<Image src={logo} alt="Nexgami Banner" />
				</div>
			</section>

			<section className="max-w-[75%] mx-auto my-10 relative">
				{/* center blobs */}
				<div className="blobCenter1"></div>
				<div className="blobCenter2"></div>

				<div className="flex flex-col gap-4">
					{dummyCourses.map((course) => (
						<div key={course.id} className="flex rounded-lg overflow-hidden max-h-[350px] w-full col-span-8">
							<Image className="h-[350px] w-[520px]" src={course.image} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex flex-col justify-center gap-4 pl-12 pr-8 rounded-r-lg w-full">
								<Typography variant="h4" fontWeight={700}>
									{course.title}
								</Typography>
								<Typography variant="body1" color="lightgray" lineHeight={1.65}>
									CyberConnect is a decentralized social network that addresses the challenges of centralized social media by offering a self-sovereign and interoperabl…{' '}
								</Typography>
								<div className="my-2">
									<DateNTime />
								</div>
								<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
								<div>
									<PrimaryButton>Start Learning</PrimaryButton>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default CoursesPage;
