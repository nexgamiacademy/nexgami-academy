import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Quiz } from '../models/quiz';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
	try {
		const { quizes } = await req.json();
		await connectDB();

		// delete mongoose.connection.models.Quiz;

		const result = await Quiz.insertMany(quizes);

		console.log('response', result);

		return NextResponse.json({
			status: 'Success',
			message: 'Saved new course successfully',
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
