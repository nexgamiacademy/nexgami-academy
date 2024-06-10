'use client';

import { useUserContext } from '@/contexts/UserContext';
import { requestAuthorization } from '@/utils/auth';
import { UserData } from '@/utils/types/GeneralTypes';
import { Backdrop, Button } from '@mui/material';
import React, { ReactNode } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

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
				<Button onClick={requestAuthorization}>Log In</Button>
			</div>
		);
};

export default RequireAuth;
