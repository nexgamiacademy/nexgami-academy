import { Box, Divider } from '@mui/material';
import React from 'react';

const QuizProgress = ({ quizesLength, currentQuiz }: { quizesLength: number; currentQuiz: number }) => {
	return (
		<div className="flex items-start justify-center py-5 xl:py-14">
			{Array(quizesLength)
				.fill(quizesLength)
				.map((key, index) => (
					<div key={index} className="flex items-center">
						<Box
							sx={
								index == currentQuiz
									? {
											border: '1px solid #6CD699',
											borderRadius: '50%',
											padding: '8px',
											marginTop: '-8px',
									  }
									: {}
							}>
							<Box
								className="h-9 w-9 rounded-full flex items-center justify-center"
								sx={{
									bgcolor: index < currentQuiz + 1 ? '#6CD699' : 'transparent',
									border: '1px solid white',
									borderColor: index < currentQuiz + 1 ? 'transparent' : 'white',
								}}>
								{index + 1}
							</Box>
						</Box>
						<Divider
							sx={{
								width: '80px',
								borderColor: 'white',
								borderStyle: 'dashed',
								display: index == quizesLength - 1 ? 'none' : 'inline-block',
								marginTop: index == currentQuiz ? '-8px' : '0',
							}}
						/>
					</div>
				))}
		</div>
	);
};

export default QuizProgress;
