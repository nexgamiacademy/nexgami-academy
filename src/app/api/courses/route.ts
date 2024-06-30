import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Course } from '../models/course';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
	try {
		const { title, image, body, videoURL, featured, authorName, instructorPhoto, category, difficulty } = await req.json();
		await connectDB();

		// delete (mongoose.connection as any).models.Course;

		const result = await Course.create({
			title: title,
			image: image,
			body: body,
			videoURL: videoURL,
			category: category,
			difficulty: difficulty,
			featured: featured,
			author: {
				name: authorName,
				photoURL: instructorPhoto,
			},
		});

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
