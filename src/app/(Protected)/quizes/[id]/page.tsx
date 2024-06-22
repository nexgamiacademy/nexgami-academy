'use client';

import { ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import gift from '@/Assets/gift.png';
import React, { useEffect, useState } from 'react';
import QuizProgress from '@/components/Quiz/QuizProgress';
import Quiz from '@/components/Quiz/Quiz';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { MUITheme } from '@/utils/MUITheme';
import CircularProgressWithLabel from '@/components/CustomComponents/ProgrssWithLabel';
import ResultProgress from '@/components/UI/ResultProgress';

const quizQuestions = [
	{
		_id: '1',
		question: 'What is a key advantage of decentralization in gaming?',
		options: ['Increased control by centralized authorities', 'Enhanced security and transparency', 'Limited accessibility based on location', 'Unfair advantages for certain players'],
	},
	{
		_id: '2',
		question: 'Which platform prioritizes true ownership of in-game assets?',
		options: ['Centralized gaming platforms', 'NexGami', 'Traditional console gaming', 'Mobile gaming apps'],
	},
	{
		_id: '3',
		question: 'How does NexGami ensure user privacy?',
		options: [
			'By storing user data on centralized servers',
			'Through robust encryption mechanisms and decentralized storage',
			'By allowing unrestricted access to user information',
			'By sharing user data with third-party advertisers',
		],
	},
];

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	// border: '2px solid #000',
	boxShadow: 24,
	pt: 6,
	px: 10,
	pb: 4,
	textAlign: 'center',
	// width: '40%',
	// height: '40vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
};

const QuizPage = () => {
	const [timeLeft, setTimeLeft] = useState(5);
	const [timeUp, setTimeUp] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [confirmFinish, setConfirmFinish] = useState(false);
	const [showResult, setShowResult] = useState(false);

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearInterval(timer);
		} else {
			setTimeUp(true);
		}
	}, [timeLeft]);

	const allAnswered = currentIndex < quizQuestions.length - 1 ? false : true;

	const handleNext = () => {
		if (allAnswered || timeUp) {
			setConfirmFinish(true);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const finishQuiz = () => {
		setConfirmFinish(false);
		setShowResult(true);
	};

	const handleClose = () => {
		setConfirmFinish(false);
	};

	if (showResult) {
		return (
			<ThemeProvider theme={MUITheme}>
				<div className="py-10 gameBg h-screen bg-[url('../../public/gameBg.png')] bg-cover bg-center">
					<div className="flex flex-col w-full justify-center items-center gap-2">
						<Typography variant="h4" fontWeight={700} align="center">
							Congratulations, You have got 20 out of 50
						</Typography>
						<div className="w-[25vmin] mt-6">
							{/* <CircularProgressWithLabel value={40} /> */}
							<ResultProgress percentComplete={90} />
						</div>
					</div>
				</div>
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider theme={MUITheme}>
			<div className="py-10 gameBg h-screen bg-[url('../../public/gameBg.png')] bg-cover bg-center">
				<div className="flex w-full justify-center gap-2">
					<Typography variant="h4" fontWeight={700} align="center">
						Answer the questions Correctly to earn exciting rearwards
					</Typography>
					<Image src={gift} alt="" />
				</div>

				<QuizProgress />
				{timeUp ? <p className="text-center">Timeup</p> : <Quiz quiz={quizQuestions[currentIndex]} timeLeft={timeLeft} />}

				<div className="flex items-center justify-center mt-20">
					<PrimaryButton onClick={handleNext}>{allAnswered || timeUp ? 'Finish Quiz' : 'Submit Answer'}</PrimaryButton>
				</div>

				<Modal open={confirmFinish} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
					<Box sx={{ ...style }}>
						<h2 className="text-2xl font-bold">Are you sure to finish the quiz?</h2>
						<p className="my-7">Your ansers wil be submitted for results and this action cannot be undone.</p>
						<div className="flex gap-20">
							<Button variant="outlined" color="error" style={{ textTransform: 'capitalize' }} onClick={handleClose}>
								Cancel
							</Button>
							<Button variant="outlined" color="success" style={{ textTransform: 'capitalize' }} onClick={finishQuiz}>
								Finish Quiz
							</Button>
						</div>
					</Box>
				</Modal>
			</div>
		</ThemeProvider>
	);
};

export default QuizPage;
