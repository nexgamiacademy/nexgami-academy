import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from 'next/link';

const getCourse = async (id: string) => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/courses/${id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch course');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading course: ', error);
	}
};

const CoursePage = async ({ params: { id } }: { params: { id: string } }) => {
	let courseId = id;

	switch (id) {
		case '0':
			courseId = '662e907092bec4f89746c4c2';
			break;
		case '1':
			courseId = '662e9a311da6d7038bba2706';
			break;
		case '2':
			courseId = '662e9bd71da6d7038bba2707';
			break;
	}
	const resp = await getCourse(courseId);
	console.log('🚀 ~ CoursePage ~ resp:', resp);

	const course = resp?.data || {};

	const createMarkup = (html: string) => {
		return { __html: html };
	};

	if (!course?.body) {
		return <p className="text-center">Could not find course</p>;
	}

	return (
		<div className="px-4 xl:px-20 mb-20">
			<div className="course-content">
				<div dangerouslySetInnerHTML={createMarkup(course.body)}></div>
				{resp?.hasQuiz && (
					<div className="flex items-center justify-center mt-10">
						<Link href={`/quizes/${course._id}`}>
							<Button variant="contained" sx={{ textTransform: 'capitalize' }}>
								Try a quiz for this course?
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default CoursePage;
