'use client';

import React from 'react';
import { Button, ButtonProps, Divider, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
// 	color: theme.palette.getContrastText(purple[500]),
// 	backgroundColor: purple[500],
// 	'&:hover': {
// 		backgroundColor: purple[700],
// 	},
// }));

const CustomButton = (props: any) => {
	return (
		<Button
			{...props}
			sx={{
				bgcolor: '#fff',
				color: 'black',
				textTransform: 'capitalize',
				'&:hover': {
					backgroundColor: 'lightgrey',
				},
			}}>
			{props.children}
		</Button>
	);
};

export default CustomButton;
