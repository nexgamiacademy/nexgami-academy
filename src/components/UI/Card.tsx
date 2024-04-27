import React from 'react';
import DifficultyChip from '@/components/Shared/DifficultyChip';
import DateNTime from '@/components/Shared/DateNTime';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

const Card = ({ course }: any) => {
	return (
		<div key={course.id} className="rounded-md overflow-hidden flex flex-col w-full mx-auto">
			<div className="w-full">
				<Image className="w-full" src={course.image} alt="Course banner" />
			</div>

			<div className="flex flex-col gap-3 bg-[#2C2F35] bg-opacity-65 p-5">
				<Typography variant="h6" fontWeight={700}>
					{course.title}
				</Typography>

				<DifficultyChip difficulty="Beginner" />

				<Typography variant="body2" lineHeight={1.65} color={'lightgray'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi provident, quasi, quas unde magnam nemo ullam consequatur exercitationem..
				</Typography>

				<DateNTime />

				<PrimaryButton>
					<Link href={`/courses/1`}>Start Here</Link>
				</PrimaryButton>
			</div>
		</div>
	);
};

export default Card;
