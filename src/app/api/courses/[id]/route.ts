import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { Course } from '../../models/course';

interface Slug {
	params: { id: string };
}

export const maxDuration = 10;

export async function GET(req: NextRequest, { params }: Slug) {
	try {
		const { id } = params;
		await connectDB();

		const result = await Course.findById(id);

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
export async function POST(req: NextRequest) {
	try {
		const { title, description, videoURL, featured, instructorName, instructorPhoto } = await req.json();
		await connectDB();

		const result = await Course.create({
			title: title,
			description: description,
			videoURL: videoURL,
			featured: featured,
			instructor: {
				name: instructorName,
				photoURL: instructorPhoto,
			},
		});

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
