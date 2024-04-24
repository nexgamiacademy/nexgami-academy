import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';
import React from 'react';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress
				sx={{
					'&.MuiCircularProgress-colorPrimary': {
						color: '#70E1FB',
					},
				}}
				variant="determinate"
				{...props}
				value={props.value * 1.666}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Typography variant="body1" fontWeight={600} component="div" color="white">{`${Math.round(props.value)}`}</Typography>
			</Box>
		</Box>
	);
}

export default CircularProgressWithLabel;
