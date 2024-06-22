'use client';

import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
interface Colors {
	[key: string]: string;
	progress: string;
	base: string;
}

interface QuizProps {
	rightAnswers: number;
	totalQuestions: number;
	strokeWidth?: number;
	colors?: Colors;
}

const ResultProgress = ({ rightAnswers = 0, totalQuestions = 0, strokeWidth = 4, colors = { progress: 'red', base: '#eee' } }: QuizProps) => {
	const percentComplete = (rightAnswers / totalQuestions) * 100;
	const box = 100;
	const radius = (box - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const offsetInit = circumference - (circumference / 100) * 0;
	const [offset, setOffSet] = useState(offsetInit);

	useEffect(() => {
		const offset = circumference - (circumference / 100) * percentComplete;
		setOffSet(offset);
	}, [circumference, percentComplete]);

	return (
		<div className="relative">
			<svg viewBox={`0 0 ${box} ${box}`} style={{ transform: 'rotate(-90deg)' }}>
				{['base', 'progress'].map((id) => {
					const color = id === 'progress' ? (percentComplete === 100 ? '#24e410' : '#2392f7') : colors[id];
					return (
						<circle
							className={id}
							key={id}
							strokeWidth={strokeWidth}
							r={radius}
							cx={box / 2}
							cy={box / 2}
							strokeDasharray={circumference}
							strokeDashoffset={id === 'progress' ? offset : 0}
							fill="transparent"
							stroke={color}
							strokeLinecap="round"
						/>
					);
				})}
			</svg>

			<div className="absolute top-0 left-0 right-0 w-full h-full flex justify-center items-center text-center text-4xl font-bold">
				{rightAnswers}/{totalQuestions}
			</div>
		</div>
	);
};

export default ResultProgress;
