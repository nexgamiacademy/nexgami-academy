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
		<section className="flex flex-col xl:flex-row items-center justify-around py-8 lg:py-16 px-8 xl:px-20 w-full gap-10">
			<div className="xl:w-2/5">
				<Typography variant="body1" sx={{ fontSize: { xs: '14px', xl: '18px' } }}>
					Learn All About
				</Typography>
				<Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: '34px', xl: '64px' } }}>
					The Next Generation
				</Typography>
				<Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: '34px', xl: '64px' } }}>
					of <span className="font-semibold text-primary">Gaming</span>
				</Typography>
				<Divider sx={{ borderColor: 'white', width: '4rem', margin: '18px 0' }} />
				<Typography variant="body1" sx={{ margin: '1rem 0', fontSize: { xs: '14px', xl: '18px' } }}>
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
