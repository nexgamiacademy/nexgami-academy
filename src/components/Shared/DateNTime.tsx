import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DateNTime = () => {
	return (
		<div className="flex gap-10 text-gray-400 text-sm">
			<p>Dec 12, 2023</p>
			<div className="flex gap-1">
				<AccessTimeIcon fontSize="small" />
				<p>12 min</p>
			</div>
		</div>
	);
};

export default DateNTime;
