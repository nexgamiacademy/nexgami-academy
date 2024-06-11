import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../models/user';
import connectDB from '@/libs/db';
import mongoose, { Mongoose } from 'mongoose';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const code = searchParams.get('code');

		const clientId = '4bfca401000';
		const clientSecret = 'YWYWNGEZNZCTNTG0OC0ZMDC2LTKYMMYTNTUZNJCWNTE1NWFK';
		const redirectUri = encodeURIComponent('http://localhost:3000/api/auth/callback');
		const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

		const tokenResponse = await fetch(`https://auth.nexgami.com/oauth2/token?code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}&client_id=${clientId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${basicAuth}`,
			},
		});

		const tokenData = await tokenResponse.json();

		console.log('🚀 ~ GET ~ tokenData:', tokenData);

		if (tokenData.access_token) {
			const userResp = await fetch('https://auth.nexgami.com/oauth2/getUserInfo', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${tokenData.access_token}`,
				},
			});

			const userData = await userResp.json();
			console.log('🚀 ~ GET ~ userData:', userData);
			await connectDB();
			await User.findOneAndUpdate({ userId: userData.userId }, userData, { upsert: true });

			const html = `
            <script>
                window.opener.postMessage(${JSON.stringify(tokenData)}, window.location.origin);
                window.close();
            </script>
            `;
			return new Response(html, { headers: { 'Content-Type': 'text/html' } });
		} else {
			const html = `
      <script>
        window.opener.postMessage({ error: 'Failed to get access token' }, window.location.origin);
        window.close();
      </script>
    `;
			return new Response(html, { headers: { 'Content-Type': 'text/html' } });
		}
	} catch (error) {
		console.log('🚀 ~ GET ~ error:', error);
		const html = `
      <script>
        window.opener.postMessage({ error: 'Failed to get access token' }, window.location.origin);
        window.close();
      </script>
    `;
		return new Response(html, { headers: { 'Content-Type': 'text/html' } });
	}
}
