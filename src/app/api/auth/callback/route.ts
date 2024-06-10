// app/api/auth/callback/route.js

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const code = searchParams.get('code');

		const clientId = '4bfca401000';
		const clientSecret = 'YWYWNGEZNZCTNTG0OC0ZMDC2LTKYMMYTNTUZNJCWNTE1NWFK';
		const redirectUri = encodeURIComponent('http://localhost:3000/api/auth/callback');
		const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

		console.log('🚀 ~ GET ~ basicAuth:', basicAuth);
		const tokenResponse = await fetch(`https://auth.nexgami.com/oauth2/token?code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}&client_id=${clientId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${basicAuth}`,
			},
			// body: `code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}&client_id=${clientId}`,
		});

		const tokenData = await tokenResponse.json();
		console.log('🚀 ~ GET ~ tokenData:', tokenData);

		if (tokenData.access_token) {
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
