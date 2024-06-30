import connectDB from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Course } from '../../models/course';

export async function POST(req: NextRequest) {
	const { difficulties, categories, limit = 4 } = await req.json();

	try {
		console.log('🚀 ~ GET ~ difficulties:', difficulties);
		await connectDB();

		const difficultyFilter = difficulties?.length ? { difficulty: { $in: difficulties } } : {};
		const categoryFilter = categories?.length ? { category: { $in: categories } } : {};

		console.log('🚀 ~ GET ~ difficultyFilter:', difficultyFilter);
		console.log('🚀 ~ POST ~ categoryFilter:', categoryFilter);

		const courses = await Course.find({ ...difficultyFilter, ...categoryFilter }).limit(limit);

		return NextResponse.json({
			status: 'Success',
			data: courses,
		});
	} catch (error: any) {
		console.error('error:', error);
		return NextResponse.json({
			status: 'Failed',
			message: error.message,
		});
	}
}
