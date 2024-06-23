import { createTheme } from '@mui/material';

export const MUITheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const ModalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	// border: '2px solid #000',
	boxShadow: 24,
	pt: 6,
	px: 10,
	pb: 4,
	textAlign: 'center',
	// width: '40%',
	// height: '40vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
};
