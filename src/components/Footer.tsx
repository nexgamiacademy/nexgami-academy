import { Typography } from '@mui/material';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="bg-base-200 w-full flex flex-col gap-5 py-10 mt-10  ">
			<Typography variant="h5" align="center">
				Follow Us
			</Typography>

			<div className="flex items-center justify-center gap-20">
				<a className="cursor-pointer" href="https://discord.com/invite/8JP8YXVwR5" target="_blank">
					<FaDiscord size={30} />
				</a>
				<a className="cursor-pointer" href="https://t.me/NexGami_Ann" target="_blank">
					<FaTelegramPlane size={30} />
				</a>
				<a className="cursor-pointer" href="https://x.com/nexgami" target="_blank">
					<FaXTwitter size={30} />
				</a>
			</div>

			<Typography variant="body2" align="center">
				Copyright © All rights reserved NexGami Academy
			</Typography>
		</div>
	);
};

export default Footer;
