import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Quiz } from '../../models/quiz';
import mongoose, { ObjectId, Schema } from 'mongoose';

interface Slug {
	params: { courseId: string };
}

export const maxDuration = 10;

export async function GET(req: NextRequest, { params }: Slug) {
	try {
		const { courseId } = params;
		await connectDB();

		const result = await Quiz.find({ courseId: courseId });

		console.log('response', result);

		return NextResponse.json({
			status: 'Success',
			// message: 'Saved new course successfully',
			data: result,
		});
	} catch (error: any) {
		console.error('error:', error);
		return NextResponse.json({
			status: 'Failed',
			message: error.message,
		});
	}
}
