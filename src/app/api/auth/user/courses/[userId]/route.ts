import { User } from '@/app/api/models/user';
import mongoose from 'mongoose';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
	try {
		// delete mongoose.connection.models.User;

		const userResp = await User.findOne({ userId: params.userId });
		return Response.json({
			status: 200,
			data: userResp,
		});

		return new Response('No user found', {
			status: 401,
		});
	} catch (error) {
		console.log('🚀 ~ GET ~ error:', error);
		return new Response('bad request', {
			status: 401,
		});
	}
}
