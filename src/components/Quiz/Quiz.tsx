'use client';

import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgressWithLabel from '../CustomComponents/ProgrssWithLabel';

const quizOptions = ['a', 'b', 'c', 'd'];
const dummyOptions = ['Web3 Gaming Platform', 'Mobile Games From Future', 'Digital Game Store', 'Crypto Mining Scheme'];

const Quiz = () => {
	const [selected, setSelcted] = useState<number>();

	const handleSelect = (index: number) => {
		if (index == selected) {
			setSelcted(undefined);
		} else {
			setSelcted(index);
		}
	};

	return (
		<div className="flex flex-col items-center gap-6">
			<Typography variant="h4" fontWeight={700} align="center" sx={{ fontSize: { xs: '22px', lg: '2.125rem' } }}>
				Which of the following best describes NexGami as an organization?
			</Typography>
			<CircularProgressWithLabel value={35} />
			<div className="grid grid-cols-2 gap-8">
				{quizOptions.map((option, index) => (
					<Box
						key={option}
						className={`border ${index == selected ? 'border-primary bg-primary text-black' : 'border-white'} rounded-xl px-10 py-5 cursor-pointer col-span-2 xl:col-span-1`}
						sx={{
							boxShadow: '0 0 10px white',
							'&:hover': {
								boxShadow: '0 0 10px #70E1FB',
								color: '#70E1FB',
								borderColor: '#70E1FB',
								bgcolor: 'transparent',
							},
						}}
						onClick={() => handleSelect(index)}>
						<Typography variant="body1" fontSize={20}>
							({option}) {dummyOptions[index]}
						</Typography>
					</Box>
				))}
			</div>
		</div>
	);
};

export default Quiz;
