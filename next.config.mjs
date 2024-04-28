/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'yt3.googleusercontent.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
