'use client';

import { Backdrop, Box, Button, FormControlLabel, Modal, Switch, TextField, colors } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import PrimaryButton from '@/components/UI/PrimaryButton';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CircularProgress from '@mui/material/CircularProgress';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Heading from '@tiptap/extension-heading';
import FileHandler from '@tiptap-pro/extension-file-handler';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { useUserContext } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import { ModalStyle } from '@/utils/MUITheme';

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
	Placeholder.configure({
		placeholder: 'Enter Course Content Here...',
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
// const content = '<p>Enter course content here...</p>';

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
	const { userData } = useUserContext();

	const [title, setTitle] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const [courseId, setCouseId] = useState<string>('');
	const [featured, setFreatured] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [quizModal, setQuizModal] = useState<boolean>(false);

	const editor = useEditor({
		extensions,
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

	const router = useRouter();

	const uploadCourse = async (event: any) => {
		event.preventDefault();

		setLoading(true);
		try {
			const resp = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/courses`, {
				method: 'POST',
				body: JSON.stringify({
					title: title,
					image: image,
					body: editor?.getHTML(),
					featured: featured,
					authorName: userData?.globalName,
				}),
			});

			const data = await resp.json();
			if (data?.data?._id) {
				// router.push(`/courses/${data.data._id}`);
				setCouseId(data.data._id);
				setQuizModal(true);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		setQuizModal(false);
	};

	return (
		<ThemeProvider theme={customTheme(outerTheme)}>
			<div className="px-10 py-10">
				<p className="mb-5 font-semibold text-2xl">Create a new course</p>
				<form action="" onSubmit={uploadCourse}>
					<div className="flex flex-col gap-4 course-content">
						<TextField
							id="outlined-basic"
							label="Course Title"
							variant="outlined"
							sx={{
								width: '100%',
							}}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Course Banner URL"
							variant="outlined"
							sx={{
								width: '100%',
							}}
							onChange={(e) => setImage(e.target.value)}
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
									checked={featured}
									onChange={(e) => setFreatured(e.target.checked)}
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
								<EditorContent placeholder="Enter Course Content " editor={editor} style={{ minHeight: '20vh' }} />
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

						{editor?.getJSON().content && (editor.getJSON() as any)?.content[0]?.content && <p className="my-5 font-semibold text-2xl">Coures Preview</p>}

						<div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || '' }} />

						<div className="mx-auto">
							<PrimaryButton type="submit">Submit Course</PrimaryButton>
						</div>
					</div>
				</form>

				{/* loading spinner */}
				<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
					<CircularProgress color="inherit" />
				</Backdrop>

				<Modal open={quizModal} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
					<Box sx={{ ...ModalStyle }}>
						<h2 className="text-2xl font-bold">Do you want to upload a quiz for this course?</h2>
						<p className="my-7">
							You can create a quiz for this course for the users to complete. To do so please click <strong>Upload Quiz</strong> button
						</p>
						<div className="flex gap-20">
							<Button variant="outlined" color="error" style={{ textTransform: 'capitalize' }} onClick={() => router.push('/')}>
								Cancel
							</Button>
							<Button variant="outlined" color="success" style={{ textTransform: 'capitalize' }} onClick={() => router.push(`/admin/upload/quiz/${courseId}`)}>
								Upload Quiz
							</Button>
						</div>
					</Box>
				</Modal>
			</div>
		</ThemeProvider>
	);
};

export default UploadCourse;
