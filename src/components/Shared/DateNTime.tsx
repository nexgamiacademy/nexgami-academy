import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DateNTime = ({ dateStr }: { dateStr?: string }) => {
	const date = new Date(dateStr || '');

	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options as any);

	return (
		<div className="flex gap-10 text-gray-400 text-sm">
			<p>{formattedDate}</p>
			{/* <div className="flex gap-1">
				<AccessTimeIcon fontSize="small" />
				<p>12 min</p>
			</div> */}
		</div>
	);
};

export default DateNTime;
