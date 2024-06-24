import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Course } from '../../models/course';
import { Quiz } from '../../models/quiz';
import { User } from '../../models/user';
import mongoose from 'mongoose';

export const maxDuration = 10;

export async function POST(req: NextRequest) {
	try {
		await connectDB();
		const { courseId, answers, userId } = await req.json();

		const result = await Quiz.find({ courseId });

		let correctCount = 0;
		result.forEach((quiz, index) => {
			if (quiz.rightAnswer === answers[index]) {
				correctCount++;
			}
		});

		console.log('correctCount', correctCount);

		// delete mongoose.connection.models.User;

		await User.findOneAndUpdate({ userId: userId }, { $inc: { points: correctCount }, $push: { courseTaken: courseId } });

		// console.log('response', result);

		return NextResponse.json({
			status: 'Success',
			// message: 'Saved new course successfully',
			data: { result: correctCount },
		});
	} catch (error: any) {
		console.error('error:', error);
		return NextResponse.json({
			status: 'Failed',
			message: error.message,
		});
	}
}
