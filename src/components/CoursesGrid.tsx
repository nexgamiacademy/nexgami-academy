import React from 'react';
import logo from '@/Assets/NexgamiLogo.png';
import rocket from '@/Assets/rocket.png';
import DateNTime from '@/components/Shared/DateNTime';
import Image from 'next/image';
import DifficultyChip from './Shared/DifficultyChip';

const CoursesGrid = () => {
	return (
		<section className="relative mx-4 my-8 xl:m-20">
			{/* blob on background top right */}
			<div className="relative -mt-">
				<div className="blobCenter1"></div>
				<div className="blobCenter2"></div>
			</div>
			<div className="grid grid-cols-12 xl:gap-10">
				<div className="flex flex-col xl:flex-row rounded-lg overflow-hidden xl:max-h-[350px] w-full col-span-12 xl:col-span-8">
					<Image className="xl:h-[350px] xl:w-[350px] xl:rounded-l-lg w-full max-h-[300px] bg-black p-2" src={logo} alt="" />

					<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start p-5 xl:pl-12 xl:pr-8 xl:rounded-r-lg w-full">
						<div className="flex flex-col gap-3">
							<p className="text-2xl font-bold">What Are BRC-20 Tokens?</p>
							<DateNTime />
							<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
						</div>
					</div>
				</div>

				<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center p-5 xl:px-10 rounded-lg col-span-12 xl:col-span-4 mt-5">
					<div className="flex flex-col gap-3">
						<p className="text-2xl font-bold">What Are Bitcoin Layer 2 Networks</p>
						<DateNTime />
						<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
					</div>
				</div>
				<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center p-5 xl:px-10 rounded-lg col-span-12 xl:col-span-4 mt-5">
					<div className="flex flex-col gap-3">
						<p className="text-2xl font-bold">An Introduction to BNB Smart Chain (BSC)</p>
						<DateNTime />
						<DifficultyChip difficulty="Intermediate" variant="bgless" color="white" />
					</div>
				</div>
				<div className="flex flex-col xl:flex-row-reverse rounded-lg overflow-hidden xl:max-h-[350px] w-full col-span-12 xl:col-span-8 mt-5">
					<Image className="xl:h-[350px] xl:w-[350px] w-full xl:rounded-r-lg bg-black" src={rocket} alt="" />

					<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start p-5 xl:pl-12 xl:pr-8 xl:rounded-l-lg w-full">
						<div className="flex flex-col gap-3">
							<p className="text-2xl font-bold">Your Guide to NexGami Launchpad and Launchpool</p>
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
