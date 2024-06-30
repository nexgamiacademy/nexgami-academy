'use client';

import React, { useEffect, useState } from 'react';
import logo from '@/Assets/nexg academy banner.jpg';
import rocket from '@/Assets/rocket.png';
import DateNTime from '@/components/Shared/DateNTime';
import Image from 'next/image';
import DifficultyChip from './Shared/DifficultyChip';
import { Button, Skeleton } from '@mui/material';
import { difficulties, getCoursesByFilter } from '@/utils/utils';
import DifficultyChipOutlined from './Shared/DifficultyOutlined';

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

const CoursesGrid = () => {
	const [courses, setCourses] = useState<any[]>([]);
	const [selectedDif, setSelectedDif] = useState<string[]>([]);
	const [loading, setLoading] = useState<Boolean>(false);

	useEffect(() => {
		const fetchCourses = async () => {
			setLoading(true);
			const res = await getCoursesByFilter({ difficulties: selectedDif });
			console.log('🚀 ~ fetchCourses ~ res:', res);
			if (res.status === 'Success') {
				setCourses(res.data);
			}
			setLoading(false);
		};

		fetchCourses();
	}, [selectedDif]);

	const handleDiff = (diff: string) => {
		if (selectedDif?.includes(diff)) {
			setSelectedDif((prev) => prev?.filter((d) => d != diff));
		} else {
			setSelectedDif((prev) => [...prev, diff]);
		}
	};

	return (
		<section className="relative mx-4 my-8 xl:m-20">
			<section className="mx-4 xl:m-20">
				{/* <div className="flex items-start gap-5">
						<p className="text-nowrap">Topics :</p>
						<div className="flex flex-wrap gap-3">
							{keywords.map((keyword) => (
								<Button variant="outlined" color="inherit" size="small" className="" key={keyword}>
									{keyword}
								</Button>
							))}
						</div>
					</div> */}

				<div className="flex items-start xl:items-center gap-5 mt-7">
					<p className="text-nowrap">Difficuly :</p>
					<div className="flex flex-wrap items-center gap-3">
						{difficulties.map((difficulty: any) => (
							<div key={difficulty} onClick={() => handleDiff(difficulty)}>
								<DifficultyChipOutlined difficulty={difficulty} selected={selectedDif.includes(difficulty)} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* blob on background top right */}
			<div className="relative -mt-">
				<div className="blobCenter1"></div>
				<div className="blobCenter2"></div>
			</div>

			{loading ? (
				<div className="relative mx-4 my-8 xl:m-20 grid gap-5 grid-cols-12">
					<Skeleton className="col-span-8" variant="rectangular" height={200} />
					<Skeleton className="col-span-4" variant="rectangular" height={200} />
					<Skeleton className="col-span-4" variant="rectangular" height={200} />
					<Skeleton className="col-span-8" variant="rectangular" height={200} />
				</div>
			) : (
				<div className="grid grid-cols-12 xl:gap-10">
					{courses?.length > 0 ? (
						<div className="flex flex-col xl:flex-row rounded-lg overflow-hidden xl:max-h-[350px] w-full col-span-12 xl:col-span-8">
							<Image className="xl:h-[350px] xl:w-[350px] xl:rounded-l-lg w-full max-h-[300px] bg-black" width={300} height={300} src={courses[0].image} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start p-5 xl:pl-12 xl:pr-8 xl:rounded-r-lg w-full">
								<div className="flex flex-col gap-3">
									<p className="text-2xl font-bold">{courses[0].title}</p>
									<DateNTime dateStr={courses[0].createdAt} />
									<DifficultyChip difficulty={courses[0].difficulty} variant="bgless" color="white" />
								</div>
							</div>
						</div>
					) : (
						''
					)}

					{courses?.length > 1 ? (
						<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center p-5 xl:px-10 rounded-lg col-span-12 xl:col-span-4 mt-5">
							<div className="flex flex-col gap-3">
								<p className="text-2xl font-bold">{courses[1].title}</p>
								<DateNTime dateStr={courses[1].createdAt} />
								<DifficultyChip difficulty={courses[1].difficulty} variant="bgless" color="white" />
							</div>
						</div>
					) : (
						''
					)}

					{courses?.length > 2 ? (
						<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-center p-5 xl:px-10 rounded-lg col-span-12 xl:col-span-4 mt-5">
							<div className="flex flex-col gap-3">
								<p className="text-2xl font-bold">{courses[0].title}</p>
								<DateNTime dateStr={courses[0].createdAt} />
								<DifficultyChip difficulty={courses[0].difficulty} variant="bgless" color="white" />
							</div>
						</div>
					) : (
						''
					)}

					{courses?.length > 2 ? (
						<div className="flex flex-col xl:flex-row-reverse rounded-lg overflow-hidden xl:max-h-[350px] w-full col-span-12 xl:col-span-8 mt-5">
							<Image className="xl:h-[350px] xl:w-[350px] w-full xl:rounded-r-lg bg-black" src={courses[0].image} alt="" />

							<div className="bg-[#2C2F35] bg-opacity-65 flex items-center justify-start p-5 xl:pl-12 xl:pr-8 xl:rounded-l-lg w-full">
								<div className="flex flex-col gap-3">
									<p className="text-2xl font-bold">{courses[0].title}</p>
									<DateNTime dateStr={courses[0].createdAt} />
									<DifficultyChip difficulty={courses[0].difficulty} variant="bgless" color="white" />
								</div>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			)}
		</section>
	);
};

export default CoursesGrid;
