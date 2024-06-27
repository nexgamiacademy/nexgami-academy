'use client';

import { useUserContext } from '@/contexts/UserContext';
import { requestAuthorization } from '@/utils/auth';
import { UserData } from '@/utils/types/GeneralTypes';
import { Backdrop, Box, Button, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	// bgcolor: 'background.',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: '18px',
	alignItems: 'center',
	justifyContent: 'center',
};

const RequireAdmin = ({ children }: { children: ReactNode }) => {
	const { userData, loadingUser } = useUserContext();

	if (loadingUser)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingUser}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	// if (userData?.userType == 'Admin') return <div>{children}</div>;
	if (userData?.userType === 'Admin') return <div>{children}</div>;
	else
		return (
			<div>
				<Box sx={style}>
					<Typography id="modal-modal-title" align="center" variant="h6" component="h2">
						Only admins are authorized for this page
					</Typography>
					<div>
						<Button variant="contained" onClick={requestAuthorization}>
							Log In
						</Button>
					</div>
				</Box>
			</div>
		);
};

export default RequireAdmin;
