import { Button } from '@mui/material';
import React from 'react';

const PrimaryButton = (props: any) => {
	return (
		<Button
			{...props}
			variant="contained"
			sx={{
				bgcolor: '#70E1FB',
				textTransform: 'capitalize',
				color: '#000',
				fontWeight: 500,
				padding: '8px 18px',
				marginTop: '16px',
				// margin: '16px auto 0 auto',
				// width: '100%',

				'&:hover': {
					bgcolor: '#64c1d6',
				},
			}}>
			{props.children}
		</Button>
	);
};

export default PrimaryButton;
