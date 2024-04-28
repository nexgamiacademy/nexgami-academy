import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import gift from '@/Assets/gift.png';
import React from 'react';
import CircularProgressWithLabel from '@/components/CustomComponents/ProgrssWithLabel';
import QuizProgress from '@/components/Quiz/QuizProgress';
import Quiz from '@/components/Quiz/Quiz';
import PrimaryButton from '@/components/UI/PrimaryButton';

const QuizPage = () => {
	return (
		<div className="py-10 gameBg h-screen bg-[url('../../public/gameBg.png')] bg-cover bg-center">
			<div className="flex w-full justify-center gap-2">
				<Typography variant="h4" fontWeight={700} align="center">
					Answer the questions Correctly to earn exciting rearwards
				</Typography>
				<Image src={gift} alt="" />
			</div>

			<QuizProgress />
			<Quiz />

			<div className="flex items-center justify-center mt-20">
				<PrimaryButton>Submit Answer</PrimaryButton>
			</div>
		</div>
	);
};

export default QuizPage;
