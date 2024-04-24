'use client';

import Image from 'next/image';
import React from 'react';
import logo from '@/Assets/NexgamiLogo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-3 bg-base-200 text-white sticky top-0 z-20">
			<ul className="flex items-center gap-8">
				<Link href={'/'}>
					<li className="flex items-center gap-2">
						<Image className="h-10 w-10" src={logo} alt="NexGami" />
						<div className="flex flex-col text-sm leading-4">
							<p>NexGami</p>
							<p className="pl-2">Academy</p>
						</div>
					</li>
				</Link>

				<li className="flex">
					<p>Articles</p>
					<ArrowDropDownIcon />
				</li>
				<li>
					<Link href={'/courses'} className="flex">
						<p>Courses</p>
						<ArrowDropDownIcon />
					</Link>
				</li>
				<li className="flex">
					<p>Learn & Earn</p>
					<ArrowDropDownIcon />
				</li>
				<li className="flex">
					<p>Partnership</p>
					<ArrowDropDownIcon />
				</li>
				<li className="flex">
					<p>Study Week</p>
					<ArrowDropDownIcon />
				</li>
			</ul>

			<ul className="flex items-center gap-7">
				<li>
					<IconButton>
						<SearchIcon htmlColor="white" />
					</IconButton>
				</li>

				<li>
					<p>Log In</p>
				</li>
				<li>
					<Button
						size="small"
						variant="contained"
						sx={{
							textTransform: 'capitalize',
						}}>
						Register
					</Button>
				</li>
				<li>
					<IconButton>
						<LanguageIcon htmlColor="white" />
					</IconButton>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
