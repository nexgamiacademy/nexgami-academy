/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import banner from '@/Assets/nexgami banner.png';
import CustomButton from '@/components/CustomButton';
import DifficultyChip from '../Shared/DifficultyChip';
import DateNTime from '../Shared/DateNTime';

const Banner = () => {
	return (
		<section className="flex items-center justify-around py-16 px-20 w-full">
			<div className="w-[35rem]">
				<Typography variant="body1">Learn All About</Typography>
				<Typography variant="h2">The Next Generation</Typography>
				<Typography variant="h2">
					of <span className="font-semibold text-primary">Gaming</span>
				</Typography>
				<Divider sx={{ borderColor: 'white', width: '4rem' }} />
				<Typography variant="body1" sx={{ margin: '1rem 0' }}>
					Your one-stop guide to all things crypto. Whether you're a rookie trying to understand mining or a veteran looking to develop a trading strategy, we've got you covered.
				</Typography>
				<CustomButton variant="contained">Start Here</CustomButton>
			</div>

			<div>
				<Image src={banner} alt="Nexgami Banner" />
				<div className="flex flex-col gap-4">
					<p>How to Read the Most Popular Crypto Candlestick Patterns</p>
					<DateNTime />
					<DifficultyChip difficulty="Beginner" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
