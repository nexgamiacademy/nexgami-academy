import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Course } from '../../models/course';

interface Slug {
	params: { id: string };
}

export const maxDuration = 10;

export async function GET(req: NextRequest) {
	try {
		await connectDB();

		const result = await Course.find().sort({ createdAt: -1 }).limit(4);

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
