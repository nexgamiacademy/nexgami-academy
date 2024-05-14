'use client';

import { Button, FormControlLabel, Switch, TextField, colors } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import PrimaryButton from '@/components/UI/PrimaryButton';
import { BubbleMenu, EditorContent, EditorProvider, FloatingMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import FileHandler from '@tiptap-pro/extension-file-handler';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';

const extensions = [
	StarterKit,
	Dropcursor,
	Link.configure({
		openOnClick: true,
		autolink: true,
	}),
	Image.configure({
		HTMLAttributes: {
			class: 'max-w-[100%] mx-auto my-5',
		},
	}),
	Heading.configure({
		levels: [1, 2, 3, 4, 5, 6],
	}),
	TextAlign.configure({
		types: ['heading', 'paragraph', 'image'],
	}),
	FileHandler.configure({
		allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
		onDrop: (currentEditor, files, pos) => {
			files.forEach((file) => {
				const fileReader = new FileReader();

				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					currentEditor
						.chain()
						.insertContentAt(pos, {
							type: 'image',
							attrs: {
								src: fileReader.result,
								class: 'max-w-[100%] mx-auto',
							},
						})
						.focus()
						.run();
				};
			});
		},
		onPaste: (currentEditor, files, htmlContent) => {
			files.forEach((file) => {
				if (htmlContent) {
					// if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
					// you could extract the pasted file from this url string and upload it to a server for example
					console.log(htmlContent); // eslint-disable-line no-console
					return false;
				}

				const fileReader = new FileReader();

				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					currentEditor
						.chain()
						.insertContentAt(currentEditor.state.selection.anchor, {
							type: 'image',
							attrs: {
								src: fileReader.result,
							},
						})
						.focus()
						.run();
				};
			});
		},
	}),
];
const content = '<p>Enter course content here...</p>';

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
			MuiButton: {
				styleOverrides: {
					root: {
						color: 'white',
						textTransform: 'capitalize',
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: 'black',
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						color: 'white',
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

	// const [courseContent, setCourseContent] = useState('');
	// console.log('🚀 ~ UploadCourse ~ courseContent:', courseContent);

	// const save = (data) => {
	// 	// console.log(data.getCurrentContent().getPlainText());
	// 	console.log(stateToHTML(data.getCurrentContent()));
	// };

	// const getHTMLData = (value: Draft.DraftModel.ImmutableData.EditorState) => {
	// 	// console.log(stateToHTML(value.getCurrentContent()));
	// 	setCourseContent(stateToHTML(value.getCurrentContent()));
	// };

	const editor = useEditor({
		extensions,
		content,
	});

	const addImage = () => {
		const url = window.prompt('URL');

		if (url && editor) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	};

	const setLink = useCallback(() => {
		const previousUrl = editor?.getAttributes('link').href;
		const url = window.prompt('URL', previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === '') {
			editor?.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	}, [editor]);

	console.log(editor?.getHTML());

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
						{/* <TextField
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
						/> */}

						{/* <MUIRichTextEditor label="Type something here" onSave={save} onChange={(value) => getHTMLData(value)} inlineToolbar={true} /> */}

						{editor && (
							<>
								<div className="flex gap-2">
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
										H1
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
										H2
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
										H3
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
										left
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
										center
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
										right
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
										justify
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().unsetTextAlign().run()}>
										unsetTextAlign
									</Button>
									<Button variant="text" type="button" onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
										setLink
									</Button>
									{/* <Button variant="text" type="button" onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')}>
										unsetLink
									</Button> */}
									<Button variant="text" type="button" onClick={addImage}>
										Image
									</Button>
								</div>
								<EditorContent editor={editor} style={{ minHeight: '20vh' }} />
								{/* <FloatingMenu editor={editor!}>This is the floating menu</FloatingMenu> */}
								<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
										Bold
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
										Italic
									</Button>
									<Button variant="text" type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
										Strike
									</Button>
									<Button variant="text" type="button" onClick={addImage}>
										Image
									</Button>
								</BubbleMenu>
							</>
						)}

						<div className="mx-auto">
							<PrimaryButton type="submit">Submit Course</PrimaryButton>
						</div>

						<div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || '' }} />
					</div>
				</form>
			</div>
		</ThemeProvider>
	);
};

export default UploadCourse;
