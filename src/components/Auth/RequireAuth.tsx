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
	width: 400,
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

const RequireAuth = ({ children }: { children: ReactNode }) => {
	const { userData, loadingUser } = useUserContext();

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	if (loadingUser)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingUser}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	if (userData?.userId) return <div>{children}</div>;
	else
		return (
			<div>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Please Log In To continue
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

export default RequireAuth;
