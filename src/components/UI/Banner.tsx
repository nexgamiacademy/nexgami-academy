'use client';

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Button, CardActionArea, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import banner from '@/Assets/nexgami banner.png';
import CustomButton from '@/components/CustomButton';
import DifficultyChip from '../Shared/DifficultyChip';
import DateNTime from '../Shared/DateNTime';
import Link from 'next/link';
import { fetchUserInfo, requestAuthorization } from '@/utils/auth';

const Banner = () => {
	return (
		<section className="flex flex-col xl:flex-row items-center justify-around py-8 lg:py-10 px-8 xl:px-16 w-full gap-10">
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
				<CustomButton variant="contained">
					<Link href={`/courses/6679c419ffb79a83ab0ba883`}>Start Here</Link>
				</CustomButton>
			</div>

			<Link href={`/courses/1`}>
				<CardActionArea sx={{ padding: '20px', borderRadius: '8px' }}>
					<Image src={banner} alt="Nexgami Banner" />
					<div className="flex flex-col gap-4">
						<p>How to Read the Most Popular Crypto Candlestick Patterns</p>
						<DateNTime />
						<DifficultyChip difficulty="Beginner" />
					</div>
				</CardActionArea>
			</Link>
		</section>
	);
};

export default Banner;
