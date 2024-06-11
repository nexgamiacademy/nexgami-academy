import { User } from '@/app/api/models/user';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const userData = request.body;
		// const userData = await User.find({ userId: userId });
		// console.log('🚀 ~ GET ~ userData:', userData);

		return new Response('ok', {
			status: 200,
		});
	} catch (error) {
		console.log('🚀 ~ GET ~ error:', error);
		return new Response('bad request', {
			status: 401,
		});
	}
}
