'use client';

import React, { ReactNode } from 'react';
import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { MUITheme } from '@/utils/MUITheme';

const MUIThemeProvider = (props: { children: ReactNode }) => {
	return <ThemeProvider theme={MUITheme}>{props.children}</ThemeProvider>;
};

export default MUIThemeProvider;
