'use client';
import { MUITheme } from '@/utils/MUITheme';
import { Backdrop, Button, CircularProgress, TextField, ThemeProvider, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import toast from 'react-hot-toast';

interface Quiz {
	courseId: string;
	question: string;
	options: string[];
	rightAnswer: number;
}

const UploadQuiz = () => {
	const params = useParams();
	const courseId = params.courseId as string;

	const blankQuiz = {
		courseId: courseId,
		question: '',
		options: [],
		rightAnswer: 0,
	};

	const [quizes, setQuizes] = useState<Quiz[]>([blankQuiz]);

	const [loading, setLoading] = useState<boolean>(false);

	const handleAdd = () => {
		setQuizes([...quizes, blankQuiz]);
	};

	const handleQuestionChange = (questionIndex: number, value: string) => {
		const newQuizes = [...quizes];
		const targetQuizOptions = newQuizes[questionIndex];

		targetQuizOptions.question = value;

		setQuizes(newQuizes);
	};

	const handleOptionChange = (questionIndex: number, optionIndex: number, value: string) => {
		const newQuiz = [...quizes];
		const targetQuizOptions = newQuiz[questionIndex].options;

		targetQuizOptions[optionIndex] = value;

		setQuizes(newQuiz);
	};

	const handleRightAnser = (questionIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number((event.target as HTMLInputElement).value);
		const newQuizes = [...quizes];
		const targetQuizOptions = newQuizes[questionIndex];

		targetQuizOptions.rightAnswer = value;

		setQuizes(newQuizes);
		// setValue((event.target as HTMLInputElement).value);
	};

	const router = useRouter();

	const handleSubmit = async () => {
		const reqBody = {
			quizes: quizes,
		};
		console.log('🚀 ~ UploadQuiz ~ reqBody:', reqBody);

		setLoading(true);
		try {
			const resp = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/quizes`, {
				method: 'POST',
				body: JSON.stringify(reqBody),
			});

			const data = await resp.json();
			console.log('🚀 ~ handleSubmit ~ data:', data);
			if (data?.status === 'Success') {
				router.push(`/courses/${courseId}`);
			} else {
				toast.error(data?.message || 'Something went wrong');
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error?.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	return (
		<ThemeProvider theme={MUITheme}>
			<div>
				<Typography variant="h4" fontWeight={700} align="center" sx={{ fontSize: { xs: '20px', lg: '2.125rem' } }}>
					Upload a quiz
				</Typography>
				{quizes.map((quiz, i) => (
					<div key={i} className="pt-10 px-5">
						<Typography variant="h6" fontWeight={700} align="center" sx={{ marginBottom: 2 }}>
							Question {i + 1}
						</Typography>
						<TextField id="outlined-textarea" label="Quiz Question" multiline rows={4} sx={{ width: '100%' }} onChange={(e) => handleQuestionChange(i, e.target.value)} value={quiz.question} />

						<div className="grid grid-cols-2 gap-4 pt-5">
							<TextField id="outlined-textarea" label="Option A" sx={{ width: '100%' }} onChange={(e) => handleOptionChange(i, 0, e.target.value)} />
							<TextField id="outlined-textarea" label="Option B" sx={{ width: '100%' }} onChange={(e) => handleOptionChange(i, 1, e.target.value)} />
							<TextField id="outlined-textarea" label="Option C" sx={{ width: '100%' }} onChange={(e) => handleOptionChange(i, 2, e.target.value)} />
							<TextField id="outlined-textarea" label="Option D" sx={{ width: '100%' }} onChange={(e) => handleOptionChange(i, 3, e.target.value)} />
						</div>

						<div className="pt-3">
							<Typography variant="body1" fontWeight={700} sx={{ marginBottom: 1 }}>
								Right Answer
							</Typography>
							<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={quiz.rightAnswer} onChange={(e) => handleRightAnser(i, e)}>
								<FormControlLabel value="0" control={<Radio />} label="Option A" />
								<FormControlLabel value="1" control={<Radio />} label="Option B" />
								<FormControlLabel value="2" control={<Radio />} label="Option C" />
								<FormControlLabel value="3" control={<Radio />} label="Option D" />
							</RadioGroup>
						</div>
					</div>
				))}

				<div className="flex items-center justify-center gap-6 pt-6">
					<Button onClick={handleAdd} variant="contained" sx={{ textTransform: 'capitalize' }}>
						Add Another Question
					</Button>
					<Button onClick={handleSubmit} variant="contained" sx={{ textTransform: 'capitalize' }}>
						Submit Quiz Set
					</Button>
				</div>

				{/* loading spinner */}
				<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
		</ThemeProvider>
	);
};

export default UploadQuiz;
