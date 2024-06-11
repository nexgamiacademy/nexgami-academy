import { User } from '@/app/api/models/user';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { accessToken: string } }) {
	try {
		const { accessToken } = params;

		const response = await fetch('https://auth.nexgami.com/oauth2/getUserInfo', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		const nexgUser = await response.json();

		if (nexgUser?.userId) {
			const userResp = await User.findOne({ userId: nexgUser.userId });
			return Response.json({
				status: 200,
				data: userResp,
			});
		}

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
