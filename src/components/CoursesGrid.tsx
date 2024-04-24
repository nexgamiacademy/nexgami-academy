import React from 'react';
import logo from '@/Assets/NexgamiLogo.png';
import rocket from '@/Assets/rocket.png';
import DateNTime from '@/components/Shared/DateNTime';
import Image from 'next/image';
import { Typography } from '@mui/material';
import DifficultyChip from './Shared/DifficultyChip';

const CoursesGrid = () => {
	return (
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
	);
};

export default CoursesGrid;
