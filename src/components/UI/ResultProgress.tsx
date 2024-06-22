'use client';

import React, { useEffect, useState } from 'react';

const ResultProgress = ({ percentComplete = 0, strokeWidth = 2, colors = { progress: 'red', base: '#eee' } }: any) => {
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
					/>
				);
			})}
		</svg>
	);
};

export default ResultProgress;
