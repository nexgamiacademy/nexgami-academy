import React from 'react';
import Dot from '@mui/icons-material/FiberManualRecord';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const DifficultyChipOutlined = ({ difficulty, selected, color }: { difficulty: 'beginner' | 'intermediate' | 'advanced'; selected: boolean; color?: string }) => {
	let bgColor = '#D5EADD';
	let dotColor = '#7AC997';

	switch (difficulty) {
		case 'intermediate':
			bgColor = '#FAF1D9';
			dotColor = '#E8BB40';
			break;
		case 'advanced':
			bgColor = '#F4D9DC';
			dotColor = '#C84051';
			break;
		default:
			break;
	}

	return (
		<Box
			// className="flex items-center gap-1 bg-[#D5EADD] px-3 py-1.5 rounded-md text-black w-fit"
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '4px',
				padding: '6px 12px',
				borderRadius: '6px',
				color: selected ? '#000' : 'white',
				backgroundColor: selected ? bgColor : 'transparent',
				border: '1px solid',
				borderColor: selected ? 'transparent' : bgColor,
				width: 'fit-content',
				cursor: 'pointer',
			}}>
			<Dot htmlColor={dotColor} sx={{ width: '14px', height: '14px', marginBottom: '2px', color: dotColor }} />
			<Typography variant="caption" textTransform="capitalize">
				{difficulty}
			</Typography>
			{selected ? <CheckIcon sx={{ color: 'black' }} fontSize="small" /> : <AddIcon fontSize="small" />}
		</Box>
	);
};

export default DifficultyChipOutlined;
