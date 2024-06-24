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
import Link from 'next/link';

async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/courses/latest`, { cache: 'no-store' });
	const data = await res.json();

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return data.data;
}

const CoursesPage = async () => {
	let latestCourses = [];
	try {
		latestCourses = await getData();
	} catch (error) {
		console.log(error);
	}
	return (
		<div className="px-6 xl:px-0 pt-6 xl:pt-0">
			<section className="flex items-center justify-around xl:py-16 xl:px-20 w-full">
				<div className="w-[45rem]">
					<Typography variant="h2" fontWeight={700} sx={{ fontSize: { xs: '32px', lg: '3.75rem' } }}>
						Earn Crypto By Learning{' '}
					</Typography>
					<Typography variant="h2" fontWeight={700} sx={{ fontSize: { xs: '32px', lg: '3.75rem' } }}>
						about <span className="font-semibold text-primary"> NexGami</span>
					</Typography>
					<Divider sx={{ borderColor: 'white', width: '4rem', margin: '10px 0' }} />
					<Typography variant="body1" sx={{ margin: '1rem 0' }}>
						Get to know about NexGami, the next generation of web3 gaming. Complete short courses, crack quizes and earn exciting rewards!
					</Typography>
					<Link href={'/quizes/1'}>
						<PrimaryButton>Get Started</PrimaryButton>
					</Link>
				</div>

				<div className="hidden xl:inline-block">
					<Image src={logo} alt="Nexgami Banner" />
				</div>
			</section>

			<section className="xl:max-w-[75%] mx-auto my-10 relative">
				{/* center blobs */}
				<div className="blobCenter1"></div>
				<div className="blobCenter2"></div>

				<div className="flex flex-col gap-4">
					{latestCourses?.map((course: any) => (
						<div key={course.id} className="flex flex-col xl:flex-row rounded-lg overflow-hidden xl:max-h-[350px] w-full col-span-8">
							<Image className="h-[350px] w-[520px]" height={300} width={300} src={course.image} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex flex-col justify-center p-5 gap-2 xl:gap-4 xl:pl-12 xl:pr-8 xl:rounded-r-lg w-full">
								<Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '22px', lg: '2.125rem' } }}>
									{course.title}
								</Typography>
								<Typography variant="body1" color="lightgray" lineHeight={1.65}>
									{course.desc}
								</Typography>
								<div className="my-2">
									<DateNTime dateStr={course.createdAt} />
								</div>
								<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
								<div>
									<Link href={`/courses/${course._id}`}>
										<PrimaryButton>Start Learning</PrimaryButton>
									</Link>
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
