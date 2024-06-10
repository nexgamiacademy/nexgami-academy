export const requestAuthorization = () => {
	const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
	const redirectUri = encodeURIComponent(`${process.env.PORT || 'http://localhost:3000'}/api/auth/callback`);
	const responseType = 'code';
	const scope = 'read_user_info';

	const authUrl = `https://auth.nexgami.com/oauth2/authorize?redirect_uri=${redirectUri}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;

	window.open(authUrl, 'authWindow', 'width=500,height=600');
};

export const fetchUserInfo = async (accessToken: string) => {
	const response = await fetch('https://auth.nexgami.com/oauth2/getUserInfo', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	const data = await response.json();
	return data;
};

export const refreshAccessToken = async (refreshToken: string) => {
	const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
	const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
	const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

	const response = await fetch(`https://auth.nexgami.com/oauth2/token?refresh_token=${refreshToken}&grant_type=refresh_token&client_id=${clientId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${basicAuth}`,
		},
	});

	const data = await response.json();
	return data;
};
