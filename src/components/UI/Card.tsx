import React from 'react';
import DifficultyChip from '@/components/Shared/DifficultyChip';
import DateNTime from '@/components/Shared/DateNTime';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

const Card = ({ course }: any) => {
	return (
		<div className="rounded-md overflow-hidden flex flex-col w-full h-full mx-auto max-h-[60vh]">
			<div className="w-full">{course?.image && <Image className="w-full h-[25vh] object-cover" src={course.image} height={300} width={300} alt="Course banner" />}</div>

			<div className="flex flex-col gap-3 bg-[#2C2F35] bg-opacity-65 p-5 h-full">
				<Typography variant="h6" fontWeight={700}>
					{course.title}
				</Typography>

				<DifficultyChip difficulty="Beginner" />

				{/* <Typography variant="body2" lineHeight={1.65} color={'lightgray'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi provident, quasi, quas unde magnam nemo ullam consequatur exercitationem..
				</Typography> */}

				<DateNTime dateStr={course.createdAt} />

				<PrimaryButton className="mt-auto">
					<Link className="w-full" href={`/courses/${course._id}`}>
						Start Here
					</Link>
				</PrimaryButton>
			</div>
		</div>
	);
};

export default Card;
