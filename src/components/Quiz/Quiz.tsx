'use client';

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CircularProgressWithLabel from '../CustomComponents/ProgrssWithLabel';

const quizOptions = ['a', 'b', 'c', 'd'];

interface QuizQuestion {
	_id: string;
	question: string;
	options: string[];
}

const Quiz = ({ timeLeft, quiz, setAnswers }: { timeLeft?: number; quiz: QuizQuestion; setAnswers: (_anser: any) => void }) => {
	const [selected, setSelected] = useState<number | undefined>();

	const handleSelect = (index: number) => {
		if (selected == index) {
			setSelected(undefined);
		} else {
			setSelected(index);
			setAnswers((prev: any) => [...prev, index]);
		}
	};

	useEffect(() => {
		setSelected(undefined);
	}, [quiz]);

	return (
		<div className="flex flex-col items-center gap-6 px-5">
			<Typography variant="h4" fontWeight={700} align="center" sx={{ fontSize: { xs: '20px', lg: '2.125rem' } }}>
				{quiz?.question}
			</Typography>
			<CircularProgressWithLabel value={timeLeft || 0} />
			<div className="grid grid-cols-2 gap-8">
				{quizOptions.map((option, index) => (
					<Box
						key={option}
						className={`border ${index == selected ? 'border-primary bg-primary text-black' : 'border-white'} rounded-xl p-4 xl:px-10 xl:py-5 cursor-pointer col-span-2 xl:col-span-1`}
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
						<Typography variant="body1" sx={{ fontSize: { xs: '16px', lg: '1.5rem' } }}>
							({option}) {quiz?.options[index]}
						</Typography>
					</Box>
				))}
			</div>
		</div>
	);
};

export default Quiz;
