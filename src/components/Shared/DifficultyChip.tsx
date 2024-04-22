import React from 'react';
import Dot from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';

const DifficultyChip = () => {
	return (
		<div className="flex items-center gap-1 bg-[#D5EADD] px-3 py-1.5 rounded-md text-black w-fit">
			<Dot htmlColor="#7AC997" sx={{ width: '14px', height: '14px', marginBottom: '2px' }} />
			<Typography variant="caption">Beginner</Typography>
		</div>
	);
};

export default DifficultyChip;
