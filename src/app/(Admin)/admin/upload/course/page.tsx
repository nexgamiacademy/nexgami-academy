'use client';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React from 'react';

import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import PrimaryButton from '@/components/UI/PrimaryButton';

const customTheme = (outerTheme: Theme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'--TextField-brandBorderColor': '#E0E3E7',
						'--TextField-brandBorderHoverColor': '#B2BAC2',
						'--TextField-brandBorderFocusedColor': '#6F7E8C',
						'& label.Mui-focused': {
							color: '#fff',
						},
					},
				},
			},
			MuiFormLabel: {
				styleOverrides: {
					root: {
						color: '#fff',
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						color: '#fff',
						borderColor: 'var(--TextField-brandBorderColor)',
					},
					root: {
						color: '#fff',
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: 'var(--TextField-brandBorderHoverColor)',
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: 'var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
			MuiFilledInput: {
				styleOverrides: {
					root: {
						'&::before, &::after': {
							borderBottom: '2px solid var(--TextField-brandBorderColor)',
						},
						'&:hover:not(.Mui-disabled, .Mui-error):before': {
							borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
						},
						'&.Mui-focused:after': {
							borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
			MuiInput: {
				styleOverrides: {
					root: {
						'&::before': {
							borderBottom: '2px solid var(--TextField-brandBorderColor)',
						},
						'&:hover:not(.Mui-disabled, .Mui-error):before': {
							borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
						},
						'&.Mui-focused:after': {
							borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
		},
	});

const UploadCourse = () => {
	const outerTheme = useTheme();

	return (
		<ThemeProvider theme={customTheme(outerTheme)}>
			<div className="px-10 py-10">
				<p className="mb-5 font-semibold text-2xl">Create a new course</p>
				<form action="">
					<div className="flex flex-col gap-4 ">
						<TextField
							id="outlined-basic"
							label="Course Title"
							variant="outlined"
							sx={{
								width: '100%',
							}}
						/>
						<FormControlLabel
							sx={{ width: 'fit-content' }}
							control={
								<Switch
									sx={{
										'.MuiSwitch-track': {
											bgcolor: '#fff',
										},
									}}
								/>
							}
							label="Feature this course"
						/>
						<TextField
							id="outlined-basic"
							label="Video Link"
							variant="outlined"
							sx={{
								width: '100%',
							}}
						/>
						<TextField
							id="outlined-basic"
							label="Course Description"
							variant="outlined"
							multiline
							rows={8}
							sx={{
								width: '100%',
							}}
						/>

						<div className="mx-auto">
							<PrimaryButton type="submit">Submit Course</PrimaryButton>
						</div>
					</div>
				</form>
			</div>
		</ThemeProvider>
	);
};

export default UploadCourse;
