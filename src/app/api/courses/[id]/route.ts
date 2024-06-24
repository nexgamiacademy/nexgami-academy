import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Course } from '../../models/course';
import { Quiz } from '../../models/quiz';

interface Slug {
	params: { id: string };
}

export const maxDuration = 10;
export const revalidate = 0;

export async function GET(req: NextRequest, { params }: Slug) {
	try {
		const { id } = params;
		await connectDB();

		const result = await Course.findById(id);
		const quizCount = await Quiz.countDocuments({ courseId: id });

		// console.log('response', result);

		return NextResponse.json({
			status: 'Success',
			// message: 'Saved new course successfully',
			data: result,
			hasQuiz: quizCount > 0,
		});
	} catch (error: any) {
		console.error('error:', error);
		return NextResponse.json({
			status: 'Failed',
			message: error.message,
		});
	}
}
